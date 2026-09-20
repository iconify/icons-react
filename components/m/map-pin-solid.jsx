import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umounmz6u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umounmz6u"/>`,
		"fallback": "rivet-icons:map-pin-solid",
	});
}

export default Component;
