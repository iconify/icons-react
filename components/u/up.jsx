import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_9h3draw.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_9h3draw"/>`,
		"fallback": "picon:up",
	});
}

export default Component;
