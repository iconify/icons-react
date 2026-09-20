import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df35pablj.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df35pablj"/>`,
		"fallback": "picon:send",
	});
}

export default Component;
