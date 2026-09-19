import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9l-303_z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9l-303_z"/>`,
		"fallback": "dashicons:palmtree",
	});
}

export default Component;
