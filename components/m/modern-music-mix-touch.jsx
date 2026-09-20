import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p7qn1eb9n.css';
import '../../css/o/ojs38lb4q.css';
import '../../css/c/caqnhmb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p7qn1eb9n"/><path class="ojs38lb4q"/><path class="caqnhmb_k"/></g>`,
		"fallback": "streamline-freehand-color:modern-music-mix-touch",
	});
}

export default Component;
