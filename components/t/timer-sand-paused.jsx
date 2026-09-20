import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3gyv7b1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3gyv7b1w"/>`,
		"fallback": "mdi:timer-sand-paused",
	});
}

export default Component;
