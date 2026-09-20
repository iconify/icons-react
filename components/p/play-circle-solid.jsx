import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu-8-1byn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu-8-1byn"/>`,
		"fallback": "la:play-circle-solid",
	});
}

export default Component;
