import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mtdcutbrr.css';
import '../../css/k/k2suf5bsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mtdcutbrr"/><path class="k2suf5bsg"/></g>`,
		"fallback": "coolicons:microphone-off-duotone-round",
	});
}

export default Component;
