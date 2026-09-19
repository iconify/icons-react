import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xhm9ckc2y.css';
import '../../css/z/zty502bor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xhm9ckc2y"/><path class="zty502bor"/></g>`,
		"fallback": "iconoir:skip-prev-solid",
	});
}

export default Component;
