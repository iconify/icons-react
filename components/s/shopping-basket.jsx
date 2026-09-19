import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi1_j4h9p.css';

const viewBox = {"width":27,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi1_j4h9p"/>`,
		"fallback": "fontisto:shopping-basket",
	});
}

export default Component;
