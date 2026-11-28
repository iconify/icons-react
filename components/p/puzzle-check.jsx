import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udy-qb4uj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udy-qb4uj"/>`,
		"fallback": "noviair:puzzle-check",
	});
}

export default Component;
