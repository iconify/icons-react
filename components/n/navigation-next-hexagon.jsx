import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qjj31sjfb.css';
import '../../css/n/nqcq8kbwa.css';
import '../../css/f/fyw2drbkc.css';
import '../../css/m/mktzl83dj.css';
import '../../css/e/e89ugbcyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qjj31sjfb"/><path class="nqcq8kbwa"/><path class="fyw2drbkc"/><path class="mktzl83dj"/><path class="e89ugbcyq"/></g>`,
		"fallback": "streamline-cyber-color:navigation-next-hexagon",
	});
}

export default Component;
