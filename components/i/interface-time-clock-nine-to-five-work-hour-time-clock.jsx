import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7bk3rb2e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7bk3rb2e"/>`,
		"fallback": "streamline:interface-time-clock-nine-to-five-work-hour-time-clock",
	});
}

export default Component;
