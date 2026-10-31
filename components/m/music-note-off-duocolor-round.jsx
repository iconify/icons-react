import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zo-v9hbio.css';
import '../../css/d/dus11-ohf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zo-v9hbio"/><path class="dus11-ohf"/></g>`,
		"fallback": "coolicons:music-note-off-duocolor-round",
	});
}

export default Component;
