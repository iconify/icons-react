import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c03uu6r0g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c03uu6r0g"/>`,
		"fallback": "energy-icons:noodles-20-bold",
	});
}

export default Component;
