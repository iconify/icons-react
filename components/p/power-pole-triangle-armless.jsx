import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n836y-tcb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n836y-tcb"/>`,
		"fallback": "roentgen:power-pole-triangle-armless",
	});
}

export default Component;
