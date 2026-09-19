import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbjgdac8e.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbjgdac8e"/>`,
		"fallback": "f7:light-min",
	});
}

export default Component;
