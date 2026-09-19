import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/e/evr8ywc1o.css';
import '../../css/s/sgi02vm9s.css';
import '../../css/c/crahcm0qm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="evr8ywc1o"/><path class="sgi02vm9s"/><path class="crahcm0qm"/></g>`,
		"fallback": "hugeicons:laurel-wreath-left-02",
	});
}

export default Component;
