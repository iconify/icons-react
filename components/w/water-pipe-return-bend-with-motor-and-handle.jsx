import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-s4cclro.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-s4cclro"/>`,
		"fallback": "pinhead:water-pipe-return-bend-with-motor-and-handle",
	});
}

export default Component;
