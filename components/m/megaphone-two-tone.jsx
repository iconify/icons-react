import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wy8v5p2wq.css';
import '../../css/r/rp-gi6wgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="wy8v5p2wq"/><path class="rp-gi6wgm"/></g>`,
		"fallback": "keyline-icons:megaphone-two-tone",
	});
}

export default Component;
