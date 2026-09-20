import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/nnccshiyx.css';
import '../../css/s/s1lz20b_y.css';
import '../../css/y/ycejrvbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="nnccshiyx"/><circle class="s1lz20b_y"/><path class="ycejrvbwe"/></g>`,
		"fallback": "lets-icons:key-alt-light",
	});
}

export default Component;
