import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haa_wlj3l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haa_wlj3l"/>`,
		"fallback": "ooui:menu",
	});
}

export default Component;
