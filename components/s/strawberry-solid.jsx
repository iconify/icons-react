import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqc7ymbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqc7ymbrr"/>`,
		"fallback": "iconaut:strawberry-solid",
	});
}

export default Component;
