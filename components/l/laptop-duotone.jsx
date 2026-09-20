import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/utcj7eb_s.css';
import '../../css/e/ejplk2-9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="utcj7eb_s"/><path class="ejplk2-9k"/></g>`,
		"fallback": "keyline-icons:laptop-duotone",
	});
}

export default Component;
