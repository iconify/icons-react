import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tjyn6ac5s.css';
import '../../css/b/bhjf0ktnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tjyn6ac5s"/><path class="bhjf0ktnt"/></g>`,
		"fallback": "coolicons:microphone-duocolor-round",
	});
}

export default Component;
