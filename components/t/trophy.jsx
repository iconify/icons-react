import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5jgqf6cz.css';

const viewBox = {"width":1664,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5jgqf6cz"/>`,
		"fallback": "fa:trophy",
	});
}

export default Component;
