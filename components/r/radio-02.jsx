import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yojqv_q0l.css';
import '../../css/v/vccsh913q.css';
import '../../css/w/wjrr5cb8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yojqv_q0l"/><circle class="vccsh913q"/><path class="wjrr5cb8h"/></g>`,
		"fallback": "hugeicons:radio-02",
	});
}

export default Component;
