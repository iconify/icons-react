import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ywkb_ub8z.css';
import '../../css/o/ob4rv7bsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ywkb_ub8z"/><path class="ob4rv7bsb"/></g>`,
		"fallback": "hugeicons:message-incoming-02",
	});
}

export default Component;
