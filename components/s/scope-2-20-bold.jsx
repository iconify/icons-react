import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc7985b_u.css';
import '../../css/i/i1pfjhb1r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc7985b_u"/><path class="i1pfjhb1r"/>`,
		"fallback": "energy-icons:scope-2-20-bold",
	});
}

export default Component;
