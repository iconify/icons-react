import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yantfb.css';
import '../../css/d/d-zrqjti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yantfb"/>`,
		"fallback": "line-md:play-to-pause-transition",
	});
}

export default Component;
