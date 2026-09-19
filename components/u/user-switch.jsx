import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qf-hi6bgl.css';
import '../../css/a/a8neukw-z.css';
import '../../css/m/m6iic4zxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qf-hi6bgl"/><circle class="a8neukw-z"/><path class="m6iic4zxz"/></g>`,
		"fallback": "hugeicons:user-switch",
	});
}

export default Component;
