import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xw_j2ib2i.css';
import '../../css/n/n2-pgm8bv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xw_j2ib2i"/><path class="n2-pgm8bv"/></g>`,
		"fallback": "andrsrxn:refresh-off",
	});
}

export default Component;
