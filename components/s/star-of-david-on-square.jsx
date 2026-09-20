import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv2clib9o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv2clib9o"/>`,
		"fallback": "pinhead:star-of-david-on-square",
	});
}

export default Component;
