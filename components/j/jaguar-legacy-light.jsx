import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmbmkcbbz.css';

const viewBox = {"width":1045.7,"height":85};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmbmkcbbz"/>`,
		"fallback": "thesvg-color:jaguar-legacy-light",
	});
}

export default Component;
