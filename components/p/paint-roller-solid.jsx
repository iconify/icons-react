import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcqeogb0c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcqeogb0c"/>`,
		"fallback": "la:paint-roller-solid",
	});
}

export default Component;
