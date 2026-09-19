import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7zk92blz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7zk92blz"/>`,
		"fallback": "at-icons:speech-bubble",
	});
}

export default Component;
