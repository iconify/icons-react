import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/ja6u_lsgr.css';
import '../../css/q/qkrtfp54v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ja6u_lsgr"/><path class="qkrtfp54v"/></g>`,
		"fallback": "coolicons:keyframes-duotone-round",
	});
}

export default Component;
