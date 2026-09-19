import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o_u0y8bmx.css';
import '../../css/d/de9gu_b1y.css';
import '../../css/f/fw5zavb2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="o_u0y8bmx"/><circle class="de9gu_b1y"/><path class="fw5zavb2x"/></g>`,
		"fallback": "hugeicons:monocle",
	});
}

export default Component;
