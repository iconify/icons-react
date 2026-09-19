import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b4imabb4j.css';
import '../../css/t/t_c-r3b-n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b4imabb4j"/><path class="t_c-r3b-n"/></g>`,
		"fallback": "bi:reply-all-fill",
	});
}

export default Component;
