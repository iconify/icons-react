import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8o5orx4n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8o5orx4n"/>`,
		"fallback": "energy-icons:phone-off-20-bold",
	});
}

export default Component;
