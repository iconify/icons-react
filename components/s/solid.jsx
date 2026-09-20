import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u21r97bfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u21r97bfn"/>`,
		"fallback": "mdi:solid",
	});
}

export default Component;
