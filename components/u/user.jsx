import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztt7ohb4x.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztt7ohb4x"/>`,
		"fallback": "simple-line-icons:user",
	});
}

export default Component;
