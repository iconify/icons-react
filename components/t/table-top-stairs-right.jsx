import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2804ochd.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2804ochd"/>`,
		"fallback": "memory:table-top-stairs-right",
	});
}

export default Component;
