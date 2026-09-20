import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9eau0bon.css';
import '../../css/p/pg-5e7bwl.css';
import '../../css/r/rppieib9f.css';
import '../../css/q/q7rnzcc6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9eau0bon"/><path class="pg-5e7bwl"/><path class="rppieib9f"/><path class="q7rnzcc6m"/>`,
		"fallback": "streamline-ultimate:technology-device-wearable-smart-watch-circle-app-1-bold",
	});
}

export default Component;
