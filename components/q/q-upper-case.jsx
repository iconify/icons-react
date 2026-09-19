import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f12wigmwc.css';

const viewBox = {"width":795,"height":813};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f12wigmwc"/>`,
		"fallback": "ls:q-upper-case",
	});
}

export default Component;
