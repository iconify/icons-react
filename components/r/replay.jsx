import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i-crhm2ck.css';
import '../../css/z/zr7fhzd-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i-crhm2ck"/><path class="zr7fhzd-n"/></g>`,
		"fallback": "hugeicons:replay",
	});
}

export default Component;
