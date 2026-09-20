import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/biodi_3qr.css';
import '../../css/q/q-qp8tqaj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="biodi_3qr"/><path class="q-qp8tqaj"/></g>`,
		"fallback": "streamline:screensaver-monitor-wallpaper",
	});
}

export default Component;
