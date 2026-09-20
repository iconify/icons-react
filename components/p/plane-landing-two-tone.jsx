import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ei7ksgbtv.css';
import '../../css/n/nq9dj2nxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ei7ksgbtv"/><path class="nq9dj2nxn"/></g>`,
		"fallback": "keyline-icons:plane-landing-two-tone",
	});
}

export default Component;
