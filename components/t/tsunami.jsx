import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es6v1qf0v.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es6v1qf0v"/>`,
		"fallback": "wi:tsunami",
	});
}

export default Component;
