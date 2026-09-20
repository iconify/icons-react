import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n9qr0fb_z.css';
import '../../css/e/e73az-bbb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="n9qr0fb_z"/><path class="e73az-bbb"/></g>`,
		"fallback": "streamline-flex:mail-send-envelope",
	});
}

export default Component;
