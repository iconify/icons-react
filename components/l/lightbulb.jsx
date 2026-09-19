import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdz3fbi0z.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdz3fbi0z"/>`,
		"fallback": "f7:lightbulb",
	});
}

export default Component;
