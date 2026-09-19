import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t31v27vgi.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t31v27vgi"/>`,
		"fallback": "gis:proj-conic",
	});
}

export default Component;
