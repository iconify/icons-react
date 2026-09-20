import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvz6j0baq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvz6j0baq"/>`,
		"fallback": "ri:star-off-line",
	});
}

export default Component;
