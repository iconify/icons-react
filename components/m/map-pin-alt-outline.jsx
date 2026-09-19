import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rwzi9g3uh.css';
import '../../css/t/t8kx8rbzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rwzi9g3uh"/><path class="t8kx8rbzi"/></g>`,
		"fallback": "flowbite:map-pin-alt-outline",
	});
}

export default Component;
