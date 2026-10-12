import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c61vqab-h.css';
import '../../css/z/zhfp_bkfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c61vqab-h"/><path class="zhfp_bkfh"/></g>`,
		"fallback": "andrsrxn:shovel",
	});
}

export default Component;
