import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj2wnyv8b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj2wnyv8b"/>`,
		"fallback": "energy-icons:shield-off-20-bold",
	});
}

export default Component;
