import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w4zdlxbwc.css';
import '../../css/q/qeti8k12m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w4zdlxbwc"/><path class="qeti8k12m"/></g>`,
		"fallback": "coolicons:music-note-sparkle-duocolor-round",
	});
}

export default Component;
