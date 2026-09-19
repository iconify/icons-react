import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyr-9pbza.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyr-9pbza"/>`,
		"fallback": "whh:trojan",
	});
}

export default Component;
