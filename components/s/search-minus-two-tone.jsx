import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k79gm2b1n.css';
import '../../css/r/r3wy7g-hk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k79gm2b1n"/><path class="r3wy7g-hk"/></g>`,
		"fallback": "keyline-icons:search-minus-two-tone",
	});
}

export default Component;
