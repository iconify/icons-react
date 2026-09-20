import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdh-3kkjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cdh-3kkjs"/>`,
		"fallback": "si:ticket-fill",
	});
}

export default Component;
