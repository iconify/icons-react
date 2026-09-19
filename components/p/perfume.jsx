import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/j6rzfd3ha.css';
import '../../css/i/iy4m0gyoo.css';
import '../../css/s/svzg1bbpt.css';
import '../../css/x/xjynq7ute.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="j6rzfd3ha"/><path class="iy4m0gyoo"/><circle class="svzg1bbpt"/><path class="xjynq7ute"/></g>`,
		"fallback": "hugeicons:perfume",
	});
}

export default Component;
