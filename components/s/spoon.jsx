import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt9f0cb0i.css';
import '../../css/l/lz7k7y3sv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt9f0cb0i"/><path class="lz7k7y3sv"/>`,
		"fallback": "openmoji:spoon",
	});
}

export default Component;
