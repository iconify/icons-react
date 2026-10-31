import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ug1qr3duo.css';
import '../../css/s/sh0pnpmvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ug1qr3duo"/><path class="sh0pnpmvf"/></g>`,
		"fallback": "coolicons:terminal-sparkle-duotone-round",
	});
}

export default Component;
