import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds6outb7u.css';
import '../../css/r/rhman1omc.css';
import '../../css/a/agu9lxblm.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 947.638)" class="ds6outb7u"><rect class="rhman1omc"/><path class="agu9lxblm"/></g>`,
		"fallback": "bpmn:manual-task",
	});
}

export default Component;
