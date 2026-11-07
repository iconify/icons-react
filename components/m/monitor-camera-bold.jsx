import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yivcorr_n.css';
import '../../css/v/vz52zxbce.css';
import '../../css/q/qruphy0vx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yivcorr_n"/><path class="vz52zxbce"/><path class="qruphy0vx"/>`,
		"fallback": "solar:monitor-camera-bold",
	});
}

export default Component;
