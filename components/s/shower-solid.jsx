import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8n7vrbtb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8n7vrbtb"/>`,
		"fallback": "la:shower-solid",
	});
}

export default Component;
