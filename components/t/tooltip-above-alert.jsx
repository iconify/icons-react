import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmf80-bpi.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmf80-bpi"/>`,
		"fallback": "memory:tooltip-above-alert",
	});
}

export default Component;
