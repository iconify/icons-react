import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pm3pyg9gd.css';
import '../../css/x/xzgfyvbvc.css';
import '../../css/t/tmhkbyb-a.css';
import '../../css/n/n_3ksjaeq.css';
import '../../css/h/hi3xwjg9j.css';
import '../../css/l/lu_3n9bmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="pm3pyg9gd wm-shadow"/><path class="xzgfyvbvc"/><path class="tmhkbyb-a"/><path class="n_3ksjaeq"/><path class="hi3xwjg9j"/><path class="lu_3n9bmc"/></g>`,
		"fallback": "withicons-retro:magnet",
	});
}

export default Component;
