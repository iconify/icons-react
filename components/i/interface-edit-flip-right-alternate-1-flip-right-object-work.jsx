import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5_9mebtb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5_9mebtb"/>`,
		"fallback": "streamline:interface-edit-flip-right-alternate-1-flip-right-object-work",
	});
}

export default Component;
