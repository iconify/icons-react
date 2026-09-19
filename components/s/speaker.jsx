import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sw4e_g5_x.css';
import '../../css/t/t_2t2ndam.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sw4e_g5_x"/><path class="t_2t2ndam"/></g>`,
		"fallback": "bi:speaker",
	});
}

export default Component;
