import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f8hm-2p5o.css';
import '../../css/x/xrqps8bku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f8hm-2p5o"/><path class="xrqps8bku"/></g>`,
		"fallback": "keyline-icons:pencil-ruler-fill",
	});
}

export default Component;
