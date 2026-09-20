import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dagas5qlh.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/d/d7t6d7u5j.css';
import '../../css/b/bfe5y7nus.css';
import '../../css/s/suoqkgb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dagas5qlh"/><g class="mc2zb0bvp"><path class="d7t6d7u5j"/><path class="bfe5y7nus"/><path class="suoqkgb5k"/></g></g>`,
		"fallback": "solar:volume-cross-bold-duotone",
	});
}

export default Component;
