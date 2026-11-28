import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2kmz5bxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2kmz5bxb"/>`,
		"fallback": "noviair-light:search",
	});
}

export default Component;
