import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikd4kd-ww.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikd4kd-ww"/>`,
		"fallback": "fa7-solid:snowplow",
	});
}

export default Component;
