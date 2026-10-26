import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s6rk1o_-t.css';
import '../../css/b/b7cnvjx-i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s6rk1o_-t"/><path class="b7cnvjx-i"/></g>`,
		"fallback": "healthicons:running",
	});
}

export default Component;
