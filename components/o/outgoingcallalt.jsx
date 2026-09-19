import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip572gbmu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ip572gbmu"/>`,
		"fallback": "whh:outgoingcallalt",
	});
}

export default Component;
