import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp-yh0bkr.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp-yh0bkr"/>`,
		"fallback": "lineicons:shift-left",
	});
}

export default Component;
