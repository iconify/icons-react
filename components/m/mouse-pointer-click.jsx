import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/t2t68ccfp.css';
import '../../css/b/b535abcuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="t2t68ccfp"/><path class="b535abcuw"/></g>`,
		"fallback": "hugeicons:mouse-pointer-click",
	});
}

export default Component;
