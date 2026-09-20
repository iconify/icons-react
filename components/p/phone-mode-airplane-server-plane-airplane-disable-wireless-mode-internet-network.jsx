import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxlk8fdpd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxlk8fdpd"/>`,
		"fallback": "streamline:phone-mode-airplane-server-plane-airplane-disable-wireless-mode-internet-network",
	});
}

export default Component;
