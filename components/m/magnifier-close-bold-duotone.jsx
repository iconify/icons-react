import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r0xhknb7f.css';
import '../../css/b/beagoacsk.css';
import '../../css/w/wo1a-bbne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="r0xhknb7f"/><path class="beagoacsk"/><path class="wo1a-bbne"/></g>`,
		"fallback": "solar:magnifier-close-bold-duotone",
	});
}

export default Component;
