import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t_ev7s-sv.css';
import '../../css/u/uyc7gv16e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t_ev7s-sv"/><path class="uyc7gv16e"/></g>`,
		"fallback": "material-icon-theme:readme",
	});
}

export default Component;
