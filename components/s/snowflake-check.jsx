import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jm-z46p2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jm-z46p2v"/>`,
		"fallback": "mdi:snowflake-check",
	});
}

export default Component;
