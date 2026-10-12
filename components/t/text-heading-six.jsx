import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wv_my9euo.css';
import '../../css/c/cyri5-5ke.css';
import '../../css/m/mxxvqr8ab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wv_my9euo"/><circle transform="rotate(90 19.24 19.34)" class="cyri5-5ke"/><path class="mxxvqr8ab"/></g>`,
		"fallback": "andrsrxn:text-heading-six",
	});
}

export default Component;
