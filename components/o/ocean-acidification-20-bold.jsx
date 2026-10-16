import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o92oj3biv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o92oj3biv"/>`,
		"fallback": "energy-icons:ocean-acidification-20-bold",
	});
}

export default Component;
