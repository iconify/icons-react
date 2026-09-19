import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ycwh3tb-y.css';
import '../../css/q/qdgw_cfex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ycwh3tb-y"/><path class="qdgw_cfex"/></g>`,
		"fallback": "hugeicons:pencil-ruler",
	});
}

export default Component;
