import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl3jor9cr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl3jor9cr"/>`,
		"fallback": "noviair-light:toaster",
	});
}

export default Component;
