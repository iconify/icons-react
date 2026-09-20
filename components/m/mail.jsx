import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmqh5-yly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmqh5-yly"/>`,
		"fallback": "mdi:mail",
	});
}

export default Component;
