import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yinqbkn9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yinqbkn9l"/>`,
		"fallback": "mingcute:sun-fog-line",
	});
}

export default Component;
