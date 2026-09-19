import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/e/ep3ynlbzq.css';
import '../../css/j/jvtjbnueh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ep3ynlbzq"/><path class="jvtjbnueh"/></g>`,
		"fallback": "hugeicons:play-store",
	});
}

export default Component;
