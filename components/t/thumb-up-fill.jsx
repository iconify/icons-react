import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0twhztkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0twhztkk"/>`,
		"fallback": "si:thumb-up-fill",
	});
}

export default Component;
