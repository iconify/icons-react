import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9ibb1b7a.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kfa274xjb.css';
import '../../css/l/lfcrxhbkr.css';
import '../../css/x/xd8yd0bhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9ibb1b7a secondary"/><g class="dt0cm9dhy primary"><path class="kfa274xjb"/><path class="lfcrxhbkr"/><path class="xd8yd0bhm"/></g>`,
		"fallback": "iconaut:mail-dot-duo",
	});
}

export default Component;
