import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9zfdl87i.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9zfdl87i"/>`,
		"fallback": "memory:tooltip-above-help",
	});
}

export default Component;
