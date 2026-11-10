import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gyluqvbcu.css';
import '../../css/t/tzr9dnbwb.css';
import '../../css/q/qoje3merg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gyluqvbcu"/><path class="tzr9dnbwb"/><path class="qoje3merg"/></g>`,
		"fallback": "andrsrxn:video-filled",
	});
}

export default Component;
