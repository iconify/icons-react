import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qlf4oqdjd.css';
import '../../css/a/a_td5zw6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qlf4oqdjd"/><path clip-rule="evenodd" class="a_td5zw6f"/></g>`,
		"fallback": "solar:minimalistic-magnifier-bold-duotone",
	});
}

export default Component;
