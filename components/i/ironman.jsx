import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8pd1cytm.css';

const viewBox = {"width":832,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8pd1cytm"/>`,
		"fallback": "whh:ironman",
	});
}

export default Component;
