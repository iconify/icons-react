import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz45orb-l.css';
import '../../css/p/pd3uy56kd.css';
import '../../css/y/yhzwzc4av.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz45orb-l"/><path class="pd3uy56kd"/><path class="yhzwzc4av"/>`,
		"fallback": "streamline-freehand:multimedia-controls-button-next",
	});
}

export default Component;
