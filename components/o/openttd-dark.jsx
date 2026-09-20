import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia6yr0bfx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia6yr0bfx"/>`,
		"fallback": "selfhst:openttd-dark",
	});
}

export default Component;
