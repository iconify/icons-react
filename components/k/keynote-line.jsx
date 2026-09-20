import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc7puxpvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc7puxpvh"/>`,
		"fallback": "ri:keynote-line",
	});
}

export default Component;
