import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fsm5nwmch.css';
import '../../css/x/xztlabogw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fsm5nwmch"/><path class="xztlabogw"/></g>`,
		"fallback": "pepicons-print:star-filled",
	});
}

export default Component;
