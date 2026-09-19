import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-7gfo8if.css';

const viewBox = {"width":432,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-7gfo8if"/>`,
		"fallback": "zmdi:markunread-mailbox",
	});
}

export default Component;
