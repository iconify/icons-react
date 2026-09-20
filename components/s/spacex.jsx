import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxs996u1a.css';
import '../../css/w/wyay58blh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxs996u1a"/><path class="wyay58blh"/>`,
		"fallback": "lineicons:spacex",
	});
}

export default Component;
