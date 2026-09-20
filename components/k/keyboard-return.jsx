import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqle3ab3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqle3ab3v"/>`,
		"fallback": "mdi:keyboard-return",
	});
}

export default Component;
