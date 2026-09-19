import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/spmweu7ol.css';
import '../../css/s/syex7907e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="spmweu7ol"/><path class="syex7907e"/></g>`,
		"fallback": "hugeicons:ramadhan-01",
	});
}

export default Component;
