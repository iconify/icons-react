import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx8vpfx_n.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx8vpfx_n"/>`,
		"fallback": "memory:tooltip-above-text",
	});
}

export default Component;
