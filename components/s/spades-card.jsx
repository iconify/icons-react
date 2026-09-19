import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv0hedcfd.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv0hedcfd"/>`,
		"fallback": "ps:spades-card",
	});
}

export default Component;
