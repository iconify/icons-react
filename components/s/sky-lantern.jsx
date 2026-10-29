import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hjxju6mct.css';
import '../../css/h/hr_fn_bfr.css';
import '../../css/p/p0gu5dbyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hjxju6mct"/><path class="hr_fn_bfr"/><path class="p0gu5dbyc"/></g>`,
		"fallback": "withicons-bauhaus:sky-lantern",
	});
}

export default Component;
