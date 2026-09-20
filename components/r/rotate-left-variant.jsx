import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdisb8b-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdisb8b-o"/>`,
		"fallback": "mdi:rotate-left-variant",
	});
}

export default Component;
