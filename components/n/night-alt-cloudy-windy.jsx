import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0km01bzm.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0km01bzm"/>`,
		"fallback": "wi:night-alt-cloudy-windy",
	});
}

export default Component;
