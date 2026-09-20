import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1kvfb.css';
import '../../css/s/so-from-22.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1kvfb"/>`,
		"fallback": "line-md:water",
	});
}

export default Component;
