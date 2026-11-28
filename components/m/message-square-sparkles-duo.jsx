import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akzm_vtle.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t0f2x9b0h.css';
import '../../css/a/af_7eacyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akzm_vtle secondary"/><g class="dt0cm9dhy primary"><path class="t0f2x9b0h"/><path class="af_7eacyu"/></g>`,
		"fallback": "iconaut:message-square-sparkles-duo",
	});
}

export default Component;
