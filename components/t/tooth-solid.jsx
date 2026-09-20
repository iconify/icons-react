import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hugd8dbkj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hugd8dbkj"/>`,
		"fallback": "la:tooth-solid",
	});
}

export default Component;
