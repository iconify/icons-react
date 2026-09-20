import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mxc6vr24n.css';
import '../../css/p/ptr3-9b_e.css';
import '../../css/v/vf7wv5bfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="mxc6vr24n"/><circle class="ptr3-9b_e"/><path class="vf7wv5bfs"/></g>`,
		"fallback": "lets-icons:user-cicrle-duotone-line",
	});
}

export default Component;
