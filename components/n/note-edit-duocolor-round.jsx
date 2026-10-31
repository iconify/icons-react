import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ngtiubbgl.css';
import '../../css/v/vfb_mpb2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ngtiubbgl"/><path class="vfb_mpb2c"/></g>`,
		"fallback": "coolicons:note-edit-duocolor-round",
	});
}

export default Component;
