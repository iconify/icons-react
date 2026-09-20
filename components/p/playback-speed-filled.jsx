import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/odomavbnu.css';
import '../../css/v/v1zp_fbha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="odomavbnu"/><path class="v1zp_fbha"/></g>`,
		"fallback": "reicon:playback-speed-filled",
	});
}

export default Component;
