import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yghrc8bqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k yghrc8bqz"/>`,
		"fallback": "withicons:puzzle-piece-gloss",
	});
}

export default Component;
