import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6z4ynbdi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6z4ynbdi"/>`,
		"fallback": "roentgen:power-tower-donau-1-level",
	});
}

export default Component;
