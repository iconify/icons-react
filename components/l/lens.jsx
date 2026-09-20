import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/d/di28f0bkm.css';
import '../../css/a/aagox6bvo.css';
import '../../css/u/uzihh4l-n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="di28f0bkm"/><path class="aagox6bvo"/><path class="uzihh4l-n"/></g>`,
		"fallback": "streamline-plump:lens",
	});
}

export default Component;
