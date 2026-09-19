import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vpvr8onco.css';
import '../../css/f/f1r-u_ohq.css';
import '../../css/p/p8igeb0vv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vpvr8onco"/><path class="f1r-u_ohq"/><path class="p8igeb0vv"/></g>`,
		"fallback": "icon-park-solid:three-triangles",
	});
}

export default Component;
