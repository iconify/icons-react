import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljsp6_b8a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljsp6_b8a"/>`,
		"fallback": "energy-icons:underline-20-bold",
	});
}

export default Component;
