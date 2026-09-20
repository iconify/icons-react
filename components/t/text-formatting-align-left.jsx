import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nezm8j1vy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nezm8j1vy"/>`,
		"fallback": "streamline-block:text-formatting-align-left",
	});
}

export default Component;
