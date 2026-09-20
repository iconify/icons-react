import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxf-05bmc.css';
import '../../css/o/ob_nbubvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lxf-05bmc"/><circle class="ob_nbubvj"/></g>`,
		"fallback": "majesticons:paper-roll-2-line",
	});
}

export default Component;
