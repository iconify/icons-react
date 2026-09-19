import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sk2yvlahd.css';
import '../../css/y/y54gef5lv.css';
import '../../css/f/fw5rt46mg.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="sk2yvlahd"/><circle class="y54gef5lv"/><circle class="fw5rt46mg"/></g>`,
		"fallback": "garden:overflow-stroke-12",
	});
}

export default Component;
