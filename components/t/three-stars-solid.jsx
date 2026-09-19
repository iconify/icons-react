import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi44fdc-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi44fdc-q"/>`,
		"fallback": "iconoir:three-stars-solid",
	});
}

export default Component;
