import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xai-ytuff.css';
import '../../css/w/wps2vghvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xai-ytuff"/><path class="wps2vghvh"/></g>`,
		"fallback": "iconaut:send",
	});
}

export default Component;
