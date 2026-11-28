import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxlu7jkul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxlu7jkul"/>`,
		"fallback": "noviair-light:terminal",
	});
}

export default Component;
