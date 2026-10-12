import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lqntedcqf.css';
import '../../css/n/n2tfulm2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lqntedcqf"/><path class="n2tfulm2r"/></g>`,
		"fallback": "andrsrxn:variable",
	});
}

export default Component;
