import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl16l82px.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pl16l82px"/>`,
		"fallback": "streamline:watch-circle-heartbeat-monitor-2-remix",
	});
}

export default Component;
