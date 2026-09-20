import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1erivbae.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1erivbae"/>`,
		"fallback": "streamline:interface-time-stop-watch-half-quarter-seconds-thirty-hour-half-measure-time-stopwatch",
	});
}

export default Component;
