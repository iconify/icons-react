import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f85jvzb_a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f85jvzb_a"/>`,
		"fallback": "cib:laravel",
	});
}

export default Component;
