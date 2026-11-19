import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ah906ey3w.css';
import '../../css/b/b16l0nb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ah906ey3w"/><path class="b16l0nb8o"/></g>`,
		"fallback": "andrsrxn:shield-plus",
	});
}

export default Component;
