import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fv8w0nbun.css';
import '../../css/p/p_s6eccrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fv8w0nbun"/><path class="p_s6eccrb"/></g>`,
		"fallback": "hugeicons:pay-by-check",
	});
}

export default Component;
