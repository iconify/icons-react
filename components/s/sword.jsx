import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa_irwl6v.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa_irwl6v"/>`,
		"fallback": "whh:sword",
	});
}

export default Component;
