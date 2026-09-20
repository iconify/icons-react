import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb93zrbip.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb93zrbip"/>`,
		"fallback": "roentgen:power-pole-4-level",
	});
}

export default Component;
