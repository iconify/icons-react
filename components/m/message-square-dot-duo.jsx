import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybfwoeb6s.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s6i14l-ql.css';
import '../../css/x/xd8yd0bhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary ybfwoeb6s"/><g class="dt0cm9dhy primary"><path class="s6i14l-ql"/><path class="xd8yd0bhm"/></g>`,
		"fallback": "iconaut:message-square-dot-duo",
	});
}

export default Component;
