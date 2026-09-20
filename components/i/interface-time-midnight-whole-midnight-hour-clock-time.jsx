import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xukn4qufr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xukn4qufr"/>`,
		"fallback": "streamline:interface-time-midnight-whole-midnight-hour-clock-time",
	});
}

export default Component;
