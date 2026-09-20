import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfr42zdzf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rfr42zdzf"/>`,
		"fallback": "streamline:watch-circle-heartbeat-monitor-1-remix",
	});
}

export default Component;
