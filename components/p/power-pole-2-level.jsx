import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/paa32pj0u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="paa32pj0u"/>`,
		"fallback": "roentgen:power-pole-2-level",
	});
}

export default Component;
