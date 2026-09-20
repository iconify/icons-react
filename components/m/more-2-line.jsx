import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nybr-g8gp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nybr-g8gp"/>`,
		"fallback": "ri:more-2-line",
	});
}

export default Component;
