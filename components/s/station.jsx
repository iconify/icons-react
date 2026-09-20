import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti0vu-b3r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti0vu-b3r"/>`,
		"fallback": "zondicons:station",
	});
}

export default Component;
