import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/za_4l3cxn.css';
import '../../css/o/oa2_-qfiq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="za_4l3cxn"/><path class="oa2_-qfiq"/></g>`,
		"fallback": "bi:layout-sidebar-inset",
	});
}

export default Component;
