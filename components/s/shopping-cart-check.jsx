import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ow3ji--wa.css';
import '../../css/f/f2gsme0xh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ow3ji--wa"/><path class="f2gsme0xh"/></g>`,
		"fallback": "streamline:shopping-cart-check",
	});
}

export default Component;
