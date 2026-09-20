import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4y603qxy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4y603qxy"/>`,
		"fallback": "ooui:pause",
	});
}

export default Component;
