import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u7bjwhbit.css';
import '../../css/i/ibvqkvt5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u7bjwhbit"/><path class="ibvqkvt5f"/></g>`,
		"fallback": "coolicons:underline-bulk-round",
	});
}

export default Component;
