import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a-yw60bso.css';
import '../../css/r/rel7kcbvz.css';
import '../../css/a/a_eoytg9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="a-yw60bso"/><circle class="rel7kcbvz"/><path class="a_eoytg9v"/></g>`,
		"fallback": "hugeicons:spline-pointer",
	});
}

export default Component;
