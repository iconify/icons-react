import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wrxf4c0fc.css';
import '../../css/i/irv7fp0ub.css';
import '../../css/s/s6gz2_n4a.css';
import '../../css/w/wi0qhio0t.css';
import '../../css/z/zc1635xnh.css';
import '../../css/o/o59_klb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wrxf4c0fc"/><path class="irv7fp0ub"/><path class="s6gz2_n4a"/><path class="wi0qhio0t"/><path class="zc1635xnh"/><path class="o59_klb3x"/></g>`,
		"fallback": "solar:tuning-bold",
	});
}

export default Component;
