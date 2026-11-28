import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szaj81gsh.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szaj81gsh"/>`,
		"fallback": "pullo:satellite-light",
	});
}

export default Component;
