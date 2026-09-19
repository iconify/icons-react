import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b6u9--ulz.css';
import '../../css/w/wg_9abm1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b6u9--ulz"/><path clip-rule="evenodd" class="wg_9abm1z"/></g>`,
		"fallback": "healthicons:oral-contraception-pillsx21-outline-24px",
	});
}

export default Component;
