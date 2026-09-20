import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysq-5acba.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysq-5acba"/>`,
		"fallback": "pinhead:sedan-with-raised-hood-under-wrench",
	});
}

export default Component;
