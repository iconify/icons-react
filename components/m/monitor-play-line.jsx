import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7x1nnbur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7x1nnbur"/>`,
		"fallback": "si:monitor-play-line",
	});
}

export default Component;
