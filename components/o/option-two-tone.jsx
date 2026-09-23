import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcke1qbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcke1qbxi"/>`,
		"fallback": "keyline-icons:option-two-tone",
	});
}

export default Component;
