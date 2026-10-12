import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xk8wz3tom.css';
import '../../css/g/g-n1nh9sq.css';
import '../../css/z/z0p5lsbke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xk8wz3tom"/><path class="g-n1nh9sq"/><path class="z0p5lsbke"/></g>`,
		"fallback": "andrsrxn:text-replace",
	});
}

export default Component;
