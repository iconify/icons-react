import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihzygd0xz.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihzygd0xz"/>`,
		"fallback": "simple-line-icons:power",
	});
}

export default Component;
