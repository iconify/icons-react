import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w__6_zpen.css';
import '../../css/c/c9_h_d6ct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w__6_zpen"/><path class="c9_h_d6ct"/></g>`,
		"fallback": "reicon:link3",
	});
}

export default Component;
