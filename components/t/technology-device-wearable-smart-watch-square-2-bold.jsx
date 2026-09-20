import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmz1djcqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmz1djcqa"/>`,
		"fallback": "streamline-ultimate:technology-device-wearable-smart-watch-square-2-bold",
	});
}

export default Component;
