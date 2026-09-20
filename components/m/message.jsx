import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9mnlcpey.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9mnlcpey"/>`,
		"fallback": "uiw:message",
	});
}

export default Component;
