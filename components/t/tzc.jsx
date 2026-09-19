import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/ycb6_gb0k.css';
import '../../css/l/lrid16b_i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="ycb6_gb0k"/><path class="lrid16b_i"/></g>`,
		"fallback": "cryptocurrency-color:tzc",
	});
}

export default Component;
