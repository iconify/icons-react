import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jd46t2bod.css';
import '../../css/v/vew6e5s0g.css';
import '../../css/u/urm07pk_y.css';
import '../../css/s/s27xxkb2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jd46t2bod"/><path class="vew6e5s0g"/><path class="urm07pk_y"/><path class="s27xxkb2y"/></g>`,
		"fallback": "streamline-freehand-color:video-meeting-monitor-webcam",
	});
}

export default Component;
