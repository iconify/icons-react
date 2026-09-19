import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4vs8xdmz.css';

const viewBox = {"width":512,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4vs8xdmz"/>`,
		"fallback": "whh:vial",
	});
}

export default Component;
