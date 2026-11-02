import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/v/vx462l46d.css';
import '../../css/h/hkedf4c7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="vx462l46d"/><path class="hkedf4c7d"/></g>`,
		"fallback": "matita:mountain",
	});
}

export default Component;
