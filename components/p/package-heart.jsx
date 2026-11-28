import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt6ajr72g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt6ajr72g"/>`,
		"fallback": "noviair-light:package-heart",
	});
}

export default Component;
