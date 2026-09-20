import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odz8j8mtu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odz8j8mtu"/>`,
		"fallback": "streamline:shelf",
	});
}

export default Component;
