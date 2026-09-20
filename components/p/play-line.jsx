import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltxg7rblz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltxg7rblz"/>`,
		"fallback": "ri:play-line",
	});
}

export default Component;
