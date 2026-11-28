import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjtvx7-gn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjtvx7-gn"/>`,
		"fallback": "noviair-light:stove-alert",
	});
}

export default Component;
