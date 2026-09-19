import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y_ggmwbci.css';
import '../../css/e/ea16a_pnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y_ggmwbci"/><path class="ea16a_pnt"/></g>`,
		"fallback": "hugeicons:map-pin-minus",
	});
}

export default Component;
