import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-dyeon3h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-dyeon3h"/>`,
		"fallback": "roentgen:power-pole-asymmetric-armless",
	});
}

export default Component;
