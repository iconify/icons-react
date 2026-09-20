import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nshjy3a6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nshjy3a6m"/>`,
		"fallback": "streamline-ultimate:power-plug-disconnected-bold",
	});
}

export default Component;
