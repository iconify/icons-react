import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsa2w0bko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsa2w0bko"/>`,
		"fallback": "ci:monitor-play",
	});
}

export default Component;
