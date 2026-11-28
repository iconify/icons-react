import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oqqr_m9av.css';
import '../../css/n/nr7evsbzb.css';
import '../../css/l/lgp-dxbye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="oqqr_m9av"/><path class="nr7evsbzb"/><path class="lgp-dxbye"/></g>`,
		"fallback": "iconaut:sidebar-collapse",
	});
}

export default Component;
