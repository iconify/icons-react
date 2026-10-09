import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7yn3-0ih.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7yn3-0ih"/>`,
		"fallback": "energy-icons:person-20",
	});
}

export default Component;
