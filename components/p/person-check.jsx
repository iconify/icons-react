import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/er_rleb2t.css';
import '../../css/d/dp-2k2blm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="er_rleb2t"/><path class="dp-2k2blm"/></g>`,
		"fallback": "bi:person-check",
	});
}

export default Component;
