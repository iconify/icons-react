import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we_f2y-uq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we_f2y-uq"/>`,
		"fallback": "streamline:interface-time-nine-three-quarters-fourty-five-clock-minutes-nine-time-hour",
	});
}

export default Component;
