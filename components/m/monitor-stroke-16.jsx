import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/pfo7l95fh.css';
import '../../css/z/zp8t9bcqa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="pfo7l95fh"/><path class="zp8t9bcqa"/></g>`,
		"fallback": "garden:monitor-stroke-16",
	});
}

export default Component;
