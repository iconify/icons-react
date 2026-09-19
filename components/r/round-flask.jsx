import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/f/ftueevbmq.css';
import '../../css/q/qk76_uteq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ftueevbmq"/><path class="qk76_uteq"/></g>`,
		"fallback": "iconoir:round-flask",
	});
}

export default Component;
