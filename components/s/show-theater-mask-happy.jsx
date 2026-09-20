import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fw07smx_x.css';
import '../../css/y/yix7axb6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fw07smx_x"/><path class="yix7axb6s"/></g>`,
		"fallback": "streamline-ultimate:show-theater-mask-happy",
	});
}

export default Component;
