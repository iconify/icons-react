import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7ej88_4z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k7ej88_4z"/>`,
		"fallback": "streamline:lost-and-found-solid",
	});
}

export default Component;
