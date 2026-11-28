import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml0783bkh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oqqr_m9av.css';
import '../../css/n/nr7evsbzb.css';
import '../../css/f/fir8rv8zs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml0783bkh secondary"/><g class="dt0cm9dhy primary"><path class="oqqr_m9av"/><path class="nr7evsbzb"/><path class="fir8rv8zs"/></g>`,
		"fallback": "iconaut:sidebar-expand-duo",
	});
}

export default Component;
