import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mfz8_jbee.css';
import '../../css/d/dkkvodt2e.css';
import '../../css/k/koqj28bzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mfz8_jbee"/><path class="dkkvodt2e"/><path class="koqj28bzm"/></g>`,
		"fallback": "streamline-ultimate:task-list-check",
	});
}

export default Component;
