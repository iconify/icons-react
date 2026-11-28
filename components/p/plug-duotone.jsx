import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/csjkt1kpr.css';
import '../../css/w/wfrmirbnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="csjkt1kpr secondary"/><path class="primary wfrmirbnr"/></g>`,
		"fallback": "iconaut:plug-duotone",
	});
}

export default Component;
