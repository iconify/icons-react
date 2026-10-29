import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qi9j3qbbt.css';
import '../../css/x/xx2uf6brd.css';
import '../../css/f/fnqqe5b5e.css';
import '../../css/o/oavb46-pc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qi9j3qbbt"/><path class="wm-a xx2uf6brd"/><path class="fnqqe5b5e"/><path class="oavb46-pc wm-a"/></g>`,
		"fallback": "withicons:trash-duo",
	});
}

export default Component;
