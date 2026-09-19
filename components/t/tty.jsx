import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rexju3ogk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rexju3ogk"/>`,
		"fallback": "fa-solid:tty",
	});
}

export default Component;
