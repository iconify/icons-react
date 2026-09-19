import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lux4zt8kc.css';
import '../../css/a/aikblhfzb.css';
import '../../css/p/pia5khlmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lux4zt8kc"/><path class="aikblhfzb"/><path class="pia5khlmh"/></g>`,
		"fallback": "hugeicons:orientation-image-landscape-to-potrait",
	});
}

export default Component;
