import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzlyk9bor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzlyk9bor"/>`,
		"fallback": "noviair-light:square-arrow-left",
	});
}

export default Component;
