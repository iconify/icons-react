import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xc-6cmbze.css';
import '../../css/s/spinb_bvm.css';
import '../../css/u/u6lqj5b8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xc-6cmbze"/><path class="spinb_bvm"/><path class="u6lqj5b8w"/></g>`,
		"fallback": "streamline-cyber-color:toilet-sign",
	});
}

export default Component;
