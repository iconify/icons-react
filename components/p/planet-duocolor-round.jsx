import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/ji1--accr.css';
import '../../css/n/nitiheb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ji1--accr"/><path class="nitiheb3i"/></g>`,
		"fallback": "coolicons:planet-duocolor-round",
	});
}

export default Component;
