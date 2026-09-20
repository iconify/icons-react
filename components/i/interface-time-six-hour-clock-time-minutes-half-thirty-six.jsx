import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhd5bpl-u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhd5bpl-u"/>`,
		"fallback": "streamline:interface-time-six-hour-clock-time-minutes-half-thirty-six",
	});
}

export default Component;
