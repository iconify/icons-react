import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qxeb53bcu.css';
import '../../css/p/pn26gtbed.css';
import '../../css/y/yir38rtkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qxeb53bcu wm-shadow"/><path class="pn26gtbed"/><path class="yir38rtkb"/></g>`,
		"fallback": "withicons-retro:landmark",
	});
}

export default Component;
