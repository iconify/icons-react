import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kqms4i_wt.css';
import '../../css/c/c0a5exbxy.css';
import '../../css/u/uy4d6vb7v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kqms4i_wt"/><path class="c0a5exbxy"/><path class="uy4d6vb7v"/></g>`,
		"fallback": "streamline-plump-color:traffic-light-flat",
	});
}

export default Component;
