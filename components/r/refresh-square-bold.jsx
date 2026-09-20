import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cih8fbbtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cih8fbbtr"/>`,
		"fallback": "solar:refresh-square-bold",
	});
}

export default Component;
