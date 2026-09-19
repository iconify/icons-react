import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i65jsuv-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i65jsuv-r"/>`,
		"fallback": "griddy-icons:sticky-note",
	});
}

export default Component;
