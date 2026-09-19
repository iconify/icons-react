import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af-a9mxeu.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af-a9mxeu"/>`,
		"fallback": "fa6-solid:prescription",
	});
}

export default Component;
