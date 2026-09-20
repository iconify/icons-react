import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uh6tm789e.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/l/lvn50tezb.css';
import '../../css/y/yfbk6go2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uh6tm789e"/><g class="mc2zb0bvp"><path class="lvn50tezb"/><path class="yfbk6go2x"/></g></g>`,
		"fallback": "solar:star-fall-2-bold-duotone",
	});
}

export default Component;
