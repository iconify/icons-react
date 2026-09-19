import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/csx-dx6zn.css';
import '../../css/q/qp8um99ro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="csx-dx6zn"/><path class="qp8um99ro"/></g>`,
		"fallback": "hugeicons:refresh-04",
	});
}

export default Component;
