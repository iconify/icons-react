import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw8ihx1hz.css';

const viewBox = {"width":512,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw8ihx1hz"/>`,
		"fallback": "whh:torch",
	});
}

export default Component;
