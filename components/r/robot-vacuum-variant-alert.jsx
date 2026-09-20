import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl7qs61zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl7qs61zc"/>`,
		"fallback": "mdi:robot-vacuum-variant-alert",
	});
}

export default Component;
