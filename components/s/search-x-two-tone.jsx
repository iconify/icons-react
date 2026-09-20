import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k79gm2b1n.css';
import '../../css/o/og7gikbok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k79gm2b1n"/><path class="og7gikbok"/></g>`,
		"fallback": "keyline-icons:search-x-two-tone",
	});
}

export default Component;
