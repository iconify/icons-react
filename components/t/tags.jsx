import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg09vudny.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg09vudny"/>`,
		"fallback": "pinhead:tags",
	});
}

export default Component;
