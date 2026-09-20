import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a3g0lob5j.css';
import '../../css/e/en-suobee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a3g0lob5j"/><path class="en-suobee"/></g>`,
		"fallback": "tabler:rosette-discount-off",
	});
}

export default Component;
