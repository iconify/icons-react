import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n2v99ubda.css';
import '../../css/l/lg5zo4b-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n2v99ubda"/><path class="lg5zo4b-x"/></g>`,
		"fallback": "keyline-icons:laptop-two-tone",
	});
}

export default Component;
