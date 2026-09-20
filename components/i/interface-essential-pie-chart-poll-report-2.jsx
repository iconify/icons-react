import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swfaxu8nu.css';
import '../../css/k/kkjq9rb7f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swfaxu8nu"/><path class="kkjq9rb7f"/>`,
		"fallback": "streamline-pixel:interface-essential-pie-chart-poll-report-2",
	});
}

export default Component;
