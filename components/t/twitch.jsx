import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9uu9lbnd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9uu9lbnd"/>`,
		"fallback": "fa6-brands:twitch",
	});
}

export default Component;
