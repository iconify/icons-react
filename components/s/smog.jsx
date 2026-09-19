import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo3gpe9bj.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo3gpe9bj"/>`,
		"fallback": "fa-solid:smog",
	});
}

export default Component;
