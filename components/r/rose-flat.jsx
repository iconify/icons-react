import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yt10q1whe.css';
import '../../css/d/dg_3geblb.css';
import '../../css/e/e6y3v_b_d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yt10q1whe"/><path class="dg_3geblb"/><path class="e6y3v_b_d"/></g>`,
		"fallback": "streamline-color:rose-flat",
	});
}

export default Component;
