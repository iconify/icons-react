import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4gewgb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4gewgb1z"/>`,
		"fallback": "ri:paint-line",
	});
}

export default Component;
