import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb9h84b7m.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb9h84b7m"/>`,
		"fallback": "memory:tooltip-start-help",
	});
}

export default Component;
