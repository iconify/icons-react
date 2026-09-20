import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d66w67d0w.css';
import '../../css/z/zmq5k3b_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="d66w67d0w"/><path vector-effect="non-scaling-stroke" class="zmq5k3b_u"/></g>`,
		"fallback": "wordpress:justify-top",
	});
}

export default Component;
