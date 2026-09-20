import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqgea4myn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iqgea4myn"/>`,
		"fallback": "streamline-flex:watch-circle-heartbeat-monitor-1-remix",
	});
}

export default Component;
