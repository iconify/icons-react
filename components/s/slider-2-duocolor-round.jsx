import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u2fqe1bcs.css';
import '../../css/i/ixdelfboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u2fqe1bcs"/><path class="ixdelfboe"/></g>`,
		"fallback": "coolicons:slider-2-duocolor-round",
	});
}

export default Component;
