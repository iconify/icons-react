import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u21m0sbql.css';

const viewBox = {"width":24,"height":24,"left":-2.5,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u21m0sbql"/>`,
		"fallback": "jam:pencil",
	});
}

export default Component;
