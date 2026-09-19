import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0_n5sdns.css';

const viewBox = {"width":336,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0_n5sdns"/>`,
		"fallback": "zmdi:remote-control",
	});
}

export default Component;
