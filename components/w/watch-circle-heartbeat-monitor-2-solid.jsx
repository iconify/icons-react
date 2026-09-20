import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/she6l78jo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="she6l78jo"/>`,
		"fallback": "streamline:watch-circle-heartbeat-monitor-2-solid",
	});
}

export default Component;
