import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6kjdab9y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6kjdab9y"/>`,
		"fallback": "streamline:volume-level-high",
	});
}

export default Component;
