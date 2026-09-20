import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ipwg8f5vy.css';
import '../../css/n/n0fthq5_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ipwg8f5vy"/><path class="n0fthq5_c"/></g>`,
		"fallback": "tabler:skateboarding",
	});
}

export default Component;
