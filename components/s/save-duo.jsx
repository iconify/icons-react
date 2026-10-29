import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l_dr-jbem.css';
import '../../css/t/t2srnhboy.css';
import '../../css/s/svvk-3k2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l_dr-jbem"/><path class="t2srnhboy wm-a"/><path class="svvk-3k2b"/></g>`,
		"fallback": "withicons:save-duo",
	});
}

export default Component;
