import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmgzy2b3e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmgzy2b3e"/>`,
		"fallback": "streamline-block:nature-cloudy",
	});
}

export default Component;
