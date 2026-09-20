import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/stj45pbga.css';
import '../../css/l/l3dtshbev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="stj45pbga"/><path class="l3dtshbev"/></g>`,
		"fallback": "streamline-freehand-color:messages-bubble-sms-block-1",
	});
}

export default Component;
