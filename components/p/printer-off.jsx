import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lbj5iacpc.css';
import '../../css/j/jaqjjdvqb.css';
import '../../css/d/d-l5n7bpd.css';
import '../../css/e/eo_76b8fd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lbj5iacpc"/><path class="jaqjjdvqb"/><path class="d-l5n7bpd"/><path class="eo_76b8fd"/></g>`,
		"fallback": "iconaut:printer-off",
	});
}

export default Component;
