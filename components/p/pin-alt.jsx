import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-e0apbge.css';
import '../../css/q/qc3rjbb6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x-e0apbge"/><path class="qc3rjbb6n"/></g>`,
		"fallback": "lets-icons:pin-alt",
	});
}

export default Component;
