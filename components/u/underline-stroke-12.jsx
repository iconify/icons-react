import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uik-t4bdw.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uik-t4bdw"/>`,
		"fallback": "garden:underline-stroke-12",
	});
}

export default Component;
