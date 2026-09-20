import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aytgp4dqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aytgp4dqb"/>`,
		"fallback": "mdi:robot-off-outline",
	});
}

export default Component;
