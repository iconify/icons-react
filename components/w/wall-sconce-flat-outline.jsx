import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3__cabmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3__cabmj"/>`,
		"fallback": "mdi:wall-sconce-flat-outline",
	});
}

export default Component;
