import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fby4i0qco.css';

const viewBox = {"width":569,"height":680};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fby4i0qco"/>`,
		"fallback": "ls:meal",
	});
}

export default Component;
