import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/o9krzac4w.css';
import '../../css/x/xm9yobcih.css';
import '../../css/h/h94y0xojb.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="o9krzac4w"/><path class="xm9yobcih"/><path class="h94y0xojb"/></g>`,
		"fallback": "flag:mh-4x3",
	});
}

export default Component;
