import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl9l-cbsp.css';
import '../../css/p/pejn30ben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl9l-cbsp"/><path class="pejn30ben"/>`,
		"fallback": "streamline-ultimate:network-signal-bold",
	});
}

export default Component;
