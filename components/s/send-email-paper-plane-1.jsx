import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9s7gjbbw.css';
import '../../css/h/hx9a1gfyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s9s7gjbbw"/><path class="hx9a1gfyi"/></g>`,
		"fallback": "streamline-freehand-color:send-email-paper-plane-1",
	});
}

export default Component;
