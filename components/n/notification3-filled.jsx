import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls470t6zi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls470t6zi"/>`,
		"fallback": "reicon:notification3-filled",
	});
}

export default Component;
