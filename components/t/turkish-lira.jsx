import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dryf0rbhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dryf0rbhf"/>`,
		"fallback": "mynaui:turkish-lira",
	});
}

export default Component;
