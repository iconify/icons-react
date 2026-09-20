import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iq1w0qk4y.css';
import '../../css/k/kd_ez4bpa.css';
import '../../css/n/n-iytcb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iq1w0qk4y"/><path class="kd_ez4bpa"/><path class="n-iytcb3m"/></g>`,
		"fallback": "streamline-freehand-color:notes-hand",
	});
}

export default Component;
