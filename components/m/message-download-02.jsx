import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/swr2ivblh.css';
import '../../css/n/nv03q_b1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="swr2ivblh"/><path class="nv03q_b1d"/></g>`,
		"fallback": "hugeicons:message-download-02",
	});
}

export default Component;
