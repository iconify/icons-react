import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se7a8gbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se7a8gbgo"/>`,
		"fallback": "ri:speed-up-fill",
	});
}

export default Component;
