import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc3tac-mr.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc3tac-mr"/>`,
		"fallback": "fa6-solid:square-caret-up",
	});
}

export default Component;
