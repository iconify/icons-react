import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zx9_r_5jc.css';
import '../../css/u/uzcl_s0kh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zx9_r_5jc"/><path class="uzcl_s0kh"/></g>`,
		"fallback": "coolicons:route-duocolor-round",
	});
}

export default Component;
