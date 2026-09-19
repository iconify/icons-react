import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/urswrcbmq.css';
import '../../css/c/chvrdkzmw.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y54gef5lv.css';
import '../../css/f/fw5rt46mg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="urswrcbmq"/><path class="chvrdkzmw"/></g><g class="cuyn6tgcc"><circle class="y54gef5lv"/><circle class="fw5rt46mg"/></g>`,
		"fallback": "garden:smile-slight-stroke-16",
	});
}

export default Component;
