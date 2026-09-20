import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ocve5qhym.css';
import '../../css/q/qa4sqt5wq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ocve5qhym"/><path class="qa4sqt5wq"/></g>`,
		"fallback": "keyline-icons:sliders-2-vertical-two-tone",
	});
}

export default Component;
