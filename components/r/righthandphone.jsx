import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjxxv6b8l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjxxv6b8l"/>`,
		"fallback": "fxemoji:righthandphone",
	});
}

export default Component;
