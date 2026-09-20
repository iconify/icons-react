import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk-x0v-3r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk-x0v-3r"/>`,
		"fallback": "pinhead:ticket",
	});
}

export default Component;
