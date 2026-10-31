import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ug1qr3duo.css';
import '../../css/y/yrr95mb6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ug1qr3duo"/><path class="yrr95mb6l"/></g>`,
		"fallback": "coolicons:mail-sparkle-duotone-round",
	});
}

export default Component;
