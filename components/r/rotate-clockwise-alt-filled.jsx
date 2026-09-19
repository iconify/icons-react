import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr-yqlb9c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr-yqlb9c"/>`,
		"fallback": "carbon:rotate-clockwise-alt-filled",
	});
}

export default Component;
