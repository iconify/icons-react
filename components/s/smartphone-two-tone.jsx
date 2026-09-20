import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wqx_i9b-e.css';
import '../../css/p/pwnwd6bwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wqx_i9b-e"/><path class="pwnwd6bwk"/></g>`,
		"fallback": "keyline-icons:smartphone-two-tone",
	});
}

export default Component;
