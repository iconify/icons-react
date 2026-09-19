import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tutls0qog.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tutls0qog"/>`,
		"fallback": "at-icons:screw",
	});
}

export default Component;
