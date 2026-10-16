import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dq3d9zbgk.css';
import '../../css/x/xgeey26gf.css';
import '../../css/t/tsmkxjb6u.css';
import '../../css/z/zngp5w-5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dq3d9zbgk"/><path class="xgeey26gf"/><rect transform="matrix(-1 0 0 1 13.87 10.4)" class="tsmkxjb6u"/><path class="zngp5w-5j"/></g>`,
		"fallback": "andrsrxn:mouse-up",
	});
}

export default Component;
