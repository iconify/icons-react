import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yoeqtvbde.css';
import '../../css/k/ka0ic_bvv.css';
import '../../css/f/fb3lm9nbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yoeqtvbde"/><path class="ka0ic_bvv"/><path class="fb3lm9nbe"/></g>`,
		"fallback": "hugeicons:mail-reply-all-01",
	});
}

export default Component;
