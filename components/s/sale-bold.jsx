import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trzro9bjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="trzro9bjo"/>`,
		"fallback": "solar:sale-bold",
	});
}

export default Component;
