import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eypk3skau.css';
import '../../css/k/kf2q3hbnt.css';
import '../../css/p/pb4zwjt1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="eypk3skau"/><circle class="kf2q3hbnt"/><path class="pb4zwjt1h"/></g>`,
		"fallback": "hugeicons:spline",
	});
}

export default Component;
