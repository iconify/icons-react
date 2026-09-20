import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp935in3x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kp935in3x"/>`,
		"fallback": "streamline:watch-circle-heartbeat-monitor-1-solid",
	});
}

export default Component;
