import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdx6upobh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdx6upobh"/>`,
		"fallback": "iconaut:satellite-dish-solid",
	});
}

export default Component;
