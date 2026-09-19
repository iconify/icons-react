import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1-o7nbsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1-o7nbsb"/>`,
		"fallback": "hugeicons:mp-4-01",
	});
}

export default Component;
