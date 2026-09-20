import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1x4_db-s.css';
import '../../css/z/z759kx8fb.css';
import '../../css/j/jtybs9b8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1x4_db-s"/><path class="z759kx8fb"/><path class="jtybs9b8s"/>`,
		"fallback": "streamline-ultimate:technology-device-wearable-smart-watch-1-bold",
	});
}

export default Component;
