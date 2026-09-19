import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy5-_ebch.css';

const viewBox = {"width":1025,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy5-_ebch"/>`,
		"fallback": "whh:removetags",
	});
}

export default Component;
