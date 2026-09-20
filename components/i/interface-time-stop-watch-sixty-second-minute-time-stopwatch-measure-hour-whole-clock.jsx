import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkuni3b6w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkuni3b6w"/>`,
		"fallback": "streamline:interface-time-stop-watch-sixty-second-minute-time-stopwatch-measure-hour-whole-clock",
	});
}

export default Component;
