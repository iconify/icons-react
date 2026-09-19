import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c34_yxsgm.css';
import '../../css/y/yg14sg3ya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c34_yxsgm"/><circle class="yg14sg3ya"/></g>`,
		"fallback": "hugeicons:user-lock-01",
	});
}

export default Component;
