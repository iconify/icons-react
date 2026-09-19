import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cnp73_ylh.css';
import '../../css/t/ta_4rc_6v.css';
import '../../css/a/ay9y0bb7b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cnp73_ylh"/><path clip-rule="evenodd" class="ta_4rc_6v"/><path class="ay9y0bb7b"/></g>`,
		"fallback": "icon-park-outline:keyboard",
	});
}

export default Component;
