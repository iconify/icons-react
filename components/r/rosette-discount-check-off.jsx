import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c2ffs4jnd.css';
import '../../css/e/en-suobee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c2ffs4jnd"/><path class="en-suobee"/></g>`,
		"fallback": "tabler:rosette-discount-check-off",
	});
}

export default Component;
