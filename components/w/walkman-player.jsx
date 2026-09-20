import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/klcpl6box.css';
import '../../css/n/n4uixlouz.css';
import '../../css/h/hdg3ht41q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="klcpl6box"/><path class="n4uixlouz"/><path class="hdg3ht41q"/></g>`,
		"fallback": "streamline-freehand-color:walkman-player",
	});
}

export default Component;
