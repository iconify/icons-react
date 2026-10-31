import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/witldvb0m.css';
import '../../css/j/jml6qybah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="witldvb0m"/><path class="jml6qybah"/></g>`,
		"fallback": "coolicons:prompt-duocolor-round",
	});
}

export default Component;
