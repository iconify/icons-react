import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bg65hobfr.css';
import '../../css/d/dq_8uac5l.css';
import '../../css/h/h77qjobjk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="bg65hobfr"/><circle class="dq_8uac5l"/><path class="h77qjobjk"/></g>`,
		"fallback": "icon-park-outline:transform",
	});
}

export default Component;
