import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/q/qx6k965_v.css';
import '../../css/f/fkjssq95d.css';
import '../../css/x/x-dt5zbvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="qx6k965_v"/><path class="fkjssq95d"/><path class="x-dt5zbvy"/></g>`,
		"fallback": "hugeicons:scratch-card",
	});
}

export default Component;
