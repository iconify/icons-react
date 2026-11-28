import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unwy9u_3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unwy9u_3f"/>`,
		"fallback": "noviair-light:map-star",
	});
}

export default Component;
