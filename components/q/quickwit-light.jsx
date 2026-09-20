import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmyb9zu8v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmyb9zu8v"/>`,
		"fallback": "selfhst:quickwit-light",
	});
}

export default Component;
