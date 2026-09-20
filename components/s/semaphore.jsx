import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-o0r-jjj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-o0r-jjj"/>`,
		"fallback": "selfhst:semaphore",
	});
}

export default Component;
