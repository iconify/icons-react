import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyuq8031z.css';

const viewBox = {"width":27,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyuq8031z"/>`,
		"fallback": "fontisto:strikethrough",
	});
}

export default Component;
