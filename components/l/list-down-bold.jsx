import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obee10aza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="obee10aza"/>`,
		"fallback": "solar:list-down-bold",
	});
}

export default Component;
