import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izrtih2_n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izrtih2_n"/>`,
		"fallback": "cib:minetest",
	});
}

export default Component;
