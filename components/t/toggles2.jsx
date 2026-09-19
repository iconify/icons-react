import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dduv23k4k.css';
import '../../css/l/l_39joa3l.css';
import '../../css/e/egij13u6h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dduv23k4k"/><path class="l_39joa3l"/><path class="egij13u6h"/></g>`,
		"fallback": "bi:toggles2",
	});
}

export default Component;
