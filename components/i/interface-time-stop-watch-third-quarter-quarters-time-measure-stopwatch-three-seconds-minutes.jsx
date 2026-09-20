import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsm5h63ds.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsm5h63ds"/>`,
		"fallback": "streamline:interface-time-stop-watch-third-quarter-quarters-time-measure-stopwatch-three-seconds-minutes",
	});
}

export default Component;
