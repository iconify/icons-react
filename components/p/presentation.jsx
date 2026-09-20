import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm--x3eex.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm--x3eex"/>`,
		"fallback": "picon:presentation",
	});
}

export default Component;
