import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0xks__8y.css';
import '../../css/m/ma-nqn8dc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0xks__8y"/><path class="ma-nqn8dc"/>`,
		"fallback": "energy-icons:pipe-reducer-20-bold",
	});
}

export default Component;
