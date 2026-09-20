import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erj0l9c7m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erj0l9c7m"/>`,
		"fallback": "pinhead:sedan-under-wrench",
	});
}

export default Component;
