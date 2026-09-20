import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/byockkb9p.css';
import '../../css/q/q9nosfb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="byockkb9p"/><path class="q9nosfb1f"/></g>`,
		"fallback": "solar:square-arrow-right-up-bold-duotone",
	});
}

export default Component;
