import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yinali4xn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yinali4xn"/>`,
		"fallback": "gg:play-forwards",
	});
}

export default Component;
