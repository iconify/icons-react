import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/bd5jfpbrt.css';
import '../../css/v/v-mt-tn7b.css';
import '../../css/o/oytsreb_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="bd5jfpbrt"/><path class="v-mt-tn7b"/><path class="oytsreb_n"/></g>`,
		"fallback": "hugeicons:notification-block-02",
	});
}

export default Component;
