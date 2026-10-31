import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h6ulsebpb.css';
import '../../css/x/x0-xa_6_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h6ulsebpb"/><path class="x0-xa_6_p"/></g>`,
		"fallback": "coolicons:tags-bulk-round",
	});
}

export default Component;
