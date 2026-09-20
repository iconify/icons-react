import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8w9k1b8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8w9k1b8b"/>`,
		"fallback": "ri:picture-in-picture-exit-line",
	});
}

export default Component;
