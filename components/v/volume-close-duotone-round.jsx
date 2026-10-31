import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vpnrlhbmp.css';
import '../../css/i/i1jvlibtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vpnrlhbmp"/><path class="i1jvlibtu"/></g>`,
		"fallback": "coolicons:volume-close-duotone-round",
	});
}

export default Component;
