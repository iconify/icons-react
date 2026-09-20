import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vs6yzbcpk.css';
import '../../css/p/ppajregfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="vs6yzbcpk"/><path class="ppajregfx"/></g>`,
		"fallback": "proicons:screen-size",
	});
}

export default Component;
