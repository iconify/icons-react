import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a74ox2l4b.css';
import '../../css/l/l-if2ibsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a74ox2l4b"/><path class="l-if2ibsb wm-a"/></g>`,
		"fallback": "withicons:regex",
	});
}

export default Component;
