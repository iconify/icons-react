import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4r8lkq9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4r8lkq9b"/>`,
		"fallback": "si:monitor-close-line",
	});
}

export default Component;
