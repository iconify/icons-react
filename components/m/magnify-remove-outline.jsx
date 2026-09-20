import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5rd1n78g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5rd1n78g"/>`,
		"fallback": "mdi:magnify-remove-outline",
	});
}

export default Component;
