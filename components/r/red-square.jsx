import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in5wtwq8h.css';
import '../../css/t/tbzab391z.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in5wtwq8h"/><path class="tbzab391z"/>`,
		"fallback": "openmoji:red-square",
	});
}

export default Component;
