import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/x/x1z93vb9e.css';
import '../../css/i/ir8prxc9v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="x1z93vb9e"/><path class="ir8prxc9v"/></g>`,
		"fallback": "icon-park-outline:notes",
	});
}

export default Component;
