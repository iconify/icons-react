import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pva9lf95q.css';
import '../../css/j/jwvtersej.css';
import '../../css/q/ql59r0c_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pva9lf95q"/><path class="jwvtersej"/><path class="ql59r0c_b"/></g>`,
		"fallback": "iconoir:verified-user",
	});
}

export default Component;
