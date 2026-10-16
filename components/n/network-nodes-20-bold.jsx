import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhedj2bhl.css';
import '../../css/h/h-nm0vb_t.css';
import '../../css/i/ikay0tyrx.css';
import '../../css/j/jt5y90bql.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhedj2bhl"/><path class="h-nm0vb_t"/><path class="ikay0tyrx"/><path class="jt5y90bql"/>`,
		"fallback": "energy-icons:network-nodes-20-bold",
	});
}

export default Component;
