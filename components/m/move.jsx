import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2twb1bua.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2twb1bua"/>`,
		"fallback": "bytesize:move",
	});
}

export default Component;
