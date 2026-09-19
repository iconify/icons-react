import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk4qf0b7g.css';
import '../../css/r/rk3gvtbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk4qf0b7g"/><path class="rk3gvtbfm"/>`,
		"fallback": "bx:message-square-check",
	});
}

export default Component;
