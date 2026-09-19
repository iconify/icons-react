import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vn_io3blr.css';
import '../../css/n/n0c_0xreh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vn_io3blr"/><path class="n0c_0xreh"/></g>`,
		"fallback": "hugeicons:patient",
	});
}

export default Component;
