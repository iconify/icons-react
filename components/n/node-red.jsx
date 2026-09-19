import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/digtmc1gc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="digtmc1gc"/>`,
		"fallback": "cib:node-red",
	});
}

export default Component;
