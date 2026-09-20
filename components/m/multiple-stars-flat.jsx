import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zq34u_9gm.css';
import '../../css/a/a66egcbbq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zq34u_9gm"/><path class="a66egcbbq"/></g>`,
		"fallback": "streamline-flex-color:multiple-stars-flat",
	});
}

export default Component;
