import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7qn6rb9l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7qn6rb9l"/>`,
		"fallback": "lsicon:map-location-outline",
	});
}

export default Component;
