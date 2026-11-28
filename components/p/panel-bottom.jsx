import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqpl0teuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqpl0teuj"/>`,
		"fallback": "noviair-light:panel-bottom",
	});
}

export default Component;
