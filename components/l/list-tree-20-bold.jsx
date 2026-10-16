import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxj2d1b_f.css';
import '../../css/n/nmhn6wb1y.css';
import '../../css/y/ycfhepb6n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxj2d1b_f"/><path class="nmhn6wb1y"/><path class="ycfhepb6n"/>`,
		"fallback": "energy-icons:list-tree-20-bold",
	});
}

export default Component;
