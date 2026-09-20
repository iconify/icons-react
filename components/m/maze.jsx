import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew-n46vse.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew-n46vse"/>`,
		"fallback": "roentgen:maze",
	});
}

export default Component;
