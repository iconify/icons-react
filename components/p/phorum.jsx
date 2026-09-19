import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eonk5dneh.css';

const viewBox = {"width":895,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eonk5dneh"/>`,
		"fallback": "whh:phorum",
	});
}

export default Component;
