import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/egrr8ib-r.css';
import '../../css/z/zx_ge5blp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="egrr8ib-r"/><path class="zx_ge5blp"/></g>`,
		"fallback": "hugeicons:lamp-04",
	});
}

export default Component;
