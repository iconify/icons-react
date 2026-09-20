import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spo5qbjsj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spo5qbjsj"/>`,
		"fallback": "streamline:interface-upload-desktop-action-actions-computer-desktop-device-display-monitor-screen-upload",
	});
}

export default Component;
