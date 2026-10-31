import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q2d6jv2hs.css';
import '../../css/o/o9vrv-b-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q2d6jv2hs"/><path class="o9vrv-b-n"/></g>`,
		"fallback": "coolicons:reddit-duocolor-round",
	});
}

export default Component;
