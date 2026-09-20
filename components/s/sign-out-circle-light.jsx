import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/irhoylbet.css';
import '../../css/f/fupcznxay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="irhoylbet"/><path class="fupcznxay"/></g>`,
		"fallback": "lets-icons:sign-out-circle-light",
	});
}

export default Component;
