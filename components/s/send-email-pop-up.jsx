import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pe4c72jsw.css';
import '../../css/f/f0sjxbbaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pe4c72jsw"/><path class="f0sjxbbaw"/></g>`,
		"fallback": "streamline-freehand-color:send-email-pop-up",
	});
}

export default Component;
