import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ci_5ps2ie.css';
import '../../css/g/g1mezdb9o.css';
import '../../css/t/tvwrrkg1q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ci_5ps2ie"/><path class="g1mezdb9o"/><path class="tvwrrkg1q"/></g>`,
		"fallback": "icon-park-solid:paragraph-alphabet",
	});
}

export default Component;
