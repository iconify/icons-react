import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvnfvuh8q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvnfvuh8q"/>`,
		"fallback": "pinhead:water-standpipe-with-motor-and-handle-and-droplet",
	});
}

export default Component;
