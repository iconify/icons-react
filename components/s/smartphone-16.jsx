import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szgh9cbqh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="szgh9cbqh"/>`,
		"fallback": "qlementine-icons:smartphone-16",
	});
}

export default Component;
