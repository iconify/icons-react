import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxjvw-3ax.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxjvw-3ax"/>`,
		"fallback": "dinkie-icons:north-wind-mahjong",
	});
}

export default Component;
