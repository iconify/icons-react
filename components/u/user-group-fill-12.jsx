import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y_kavkf9c.css';
import '../../css/d/dg-px6pzq.css';
import '../../css/y/yxlcjbbfn.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="y_kavkf9c"/><circle class="dg-px6pzq"/><path class="yxlcjbbfn"/></g>`,
		"fallback": "garden:user-group-fill-12",
	});
}

export default Component;
