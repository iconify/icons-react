import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eaqxp6zrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eaqxp6zrb"/>`,
		"fallback": "ri:ticket-line",
	});
}

export default Component;
