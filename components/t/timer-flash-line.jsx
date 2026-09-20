import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doaasx1ge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="doaasx1ge"/>`,
		"fallback": "ri:timer-flash-line",
	});
}

export default Component;
