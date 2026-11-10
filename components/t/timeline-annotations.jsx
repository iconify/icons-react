import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dxc5jkdys.css';
import '../../css/e/erprbzwkx.css';
import '../../css/s/swjd-ctvi.css';
import '../../css/i/ihxq05bkx.css';
import '../../css/z/zrfz1ibxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="dxc5jkdys"/><circle class="erprbzwkx"/><path class="swjd-ctvi"/><path class="ihxq05bkx"/><path class="zrfz1ibxt"/></g>`,
		"fallback": "andrsrxn:timeline-annotations",
	});
}

export default Component;
