import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h94msoblx.css';
import '../../css/r/r76m87b2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h94msoblx"/><path class="r76m87b2v"/></g>`,
		"fallback": "andrsrxn:panels-end",
	});
}

export default Component;
