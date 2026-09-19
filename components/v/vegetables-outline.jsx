import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o0by8ubkx.css';
import '../../css/v/vunxglx4u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o0by8ubkx"/><path clip-rule="evenodd" class="vunxglx4u"/></g>`,
		"fallback": "healthicons:vegetables-outline",
	});
}

export default Component;
