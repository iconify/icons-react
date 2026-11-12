import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j14wnj9wd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j14wnj9wd"/>`,
		"fallback": "selfhst:uptime-kuma-dark",
	});
}

export default Component;
