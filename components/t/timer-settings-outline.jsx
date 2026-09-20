import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quiri2l_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quiri2l_a"/>`,
		"fallback": "mdi:timer-settings-outline",
	});
}

export default Component;
