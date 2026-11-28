import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w848w8bex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w848w8bex"/>`,
		"fallback": "noviair-light:paragraph",
	});
}

export default Component;
