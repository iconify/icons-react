import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzou1z3xk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzou1z3xk"/>`,
		"fallback": "entypo:mask",
	});
}

export default Component;
