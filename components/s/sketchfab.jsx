import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h87x-4gom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h87x-4gom"/>`,
		"fallback": "simple-icons:sketchfab",
	});
}

export default Component;
