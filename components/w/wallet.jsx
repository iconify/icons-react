import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sno9zvbwa.css';

const viewBox = {"width":1025,"height":895};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sno9zvbwa"/>`,
		"fallback": "whh:wallet",
	});
}

export default Component;
