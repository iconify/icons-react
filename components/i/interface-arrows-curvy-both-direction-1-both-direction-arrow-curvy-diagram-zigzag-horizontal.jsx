import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h32ajpbkq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h32ajpbkq"/>`,
		"fallback": "streamline:interface-arrows-curvy-both-direction-1-both-direction-arrow-curvy-diagram-zigzag-horizontal",
	});
}

export default Component;
