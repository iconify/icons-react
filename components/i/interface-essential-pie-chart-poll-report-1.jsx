import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aoi1t8j7m.css';
import '../../css/k/k1l94rx8p.css';
import '../../css/q/qd728sbzj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aoi1t8j7m"/><path class="k1l94rx8p"/><path class="qd728sbzj"/>`,
		"fallback": "streamline-pixel:interface-essential-pie-chart-poll-report-1",
	});
}

export default Component;
