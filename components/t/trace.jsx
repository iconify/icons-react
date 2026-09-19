import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbz8j5yuw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbz8j5yuw"/>`,
		"fallback": "carbon:trace",
	});
}

export default Component;
