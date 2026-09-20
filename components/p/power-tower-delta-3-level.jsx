import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i46bncbwe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i46bncbwe"/>`,
		"fallback": "roentgen:power-tower-delta-3-level",
	});
}

export default Component;
