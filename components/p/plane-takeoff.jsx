import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d-x-cbbtm.css';
import '../../css/d/dv62wvbyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d-x-cbbtm"/><path clip-rule="evenodd" class="dv62wvbyi"/></g>`,
		"fallback": "hugeicons:plane-takeoff",
	});
}

export default Component;
