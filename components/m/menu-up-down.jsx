import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3q4aactz.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3q4aactz"/>`,
		"fallback": "memory:menu-up-down",
	});
}

export default Component;
