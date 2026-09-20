import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kjy0g6b5h.css';
import '../../css/h/h47ep2b0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kjy0g6b5h"/><path class="h47ep2b0o"/></g>`,
		"fallback": "reicon:paragraph-spacing-duotone",
	});
}

export default Component;
