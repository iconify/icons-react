import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lyc90_alc.css';
import '../../css/u/uehovnqai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lyc90_alc"/><path class="uehovnqai"/></g>`,
		"fallback": "coolicons:microphone-sparkle-bulk-round",
	});
}

export default Component;
