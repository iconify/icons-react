import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/trrgvtbxt.css';
import '../../css/f/f_nzlqmly.css';
import '../../css/o/o-e2xo4wg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="trrgvtbxt"/><path class="f_nzlqmly"/><path clip-rule="evenodd" class="o-e2xo4wg"/></g>`,
		"fallback": "icon-park-outline:view-list",
	});
}

export default Component;
