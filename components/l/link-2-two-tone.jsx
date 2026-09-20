import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hivju0bye.css';
import '../../css/d/dygl0op_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hivju0bye"/><path class="dygl0op_e"/></g>`,
		"fallback": "keyline-icons:link-2-two-tone",
	});
}

export default Component;
