import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eedai1u0v.css';
import '../../css/o/otpnsvwdd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eedai1u0v"/><path class="otpnsvwdd"/></g>`,
		"fallback": "glyphs:lock-bold",
	});
}

export default Component;
