import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g3oennpau.css';
import '../../css/w/wi20y6f7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g3oennpau"/><path class="wi20y6f7d"/></g>`,
		"fallback": "coolicons:phone-off-duotone-round",
	});
}

export default Component;
