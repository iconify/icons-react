import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkpulpb9y.css';
import '../../css/c/cp728ccvd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkpulpb9y"/><path class="cp728ccvd"/>`,
		"fallback": "energy-icons:terminal-square-20-bold",
	});
}

export default Component;
