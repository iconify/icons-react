import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guyv63blm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guyv63blm"/>`,
		"fallback": "streamline:interface-time-stop-watch-quarter-time-fifteen-quarter-stopwatch-minute-measure-seconds",
	});
}

export default Component;
