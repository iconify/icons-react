import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yajgwt04s.css';
import '../../css/h/hxwjmep1l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yajgwt04s"/><path class="hxwjmep1l"/>`,
		"fallback": "energy-icons:load-curve-20",
	});
}

export default Component;
