import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/ml9ydengl.css';
import '../../css/b/b_1i_vwiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ml9ydengl"/><path class="b_1i_vwiu"/></g>`,
		"fallback": "andrsrxn:move-3d",
	});
}

export default Component;
