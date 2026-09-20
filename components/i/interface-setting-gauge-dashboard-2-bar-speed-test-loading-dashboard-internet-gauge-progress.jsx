import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5fnum5ne.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5fnum5ne"/>`,
		"fallback": "streamline:interface-setting-gauge-dashboard-2-bar-speed-test-loading-dashboard-internet-gauge-progress",
	});
}

export default Component;
