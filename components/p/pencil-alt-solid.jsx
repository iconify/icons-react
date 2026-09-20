import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxqo9ccey.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxqo9ccey"/>`,
		"fallback": "la:pencil-alt-solid",
	});
}

export default Component;
