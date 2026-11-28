import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gambh7xsw.css';
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
		"content": `<path class="gambh7xsw secondary"/><g class="dt0cm9dhy primary"><path class="xai-ytuff"/><path class="wps2vghvh"/></g>`,
		"fallback": "iconaut:send-duo",
	});
}

export default Component;
