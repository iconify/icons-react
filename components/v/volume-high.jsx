import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izmfteb9c.css';
import '../../css/h/h-581b8yd.css';
import '../../css/w/w76ucneft.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izmfteb9c"/><path class="h-581b8yd"/><path class="w76ucneft"/>`,
		"fallback": "famicons:volume-high",
	});
}

export default Component;
