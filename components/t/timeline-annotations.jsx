import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dxc5jkdys.css';
import '../../css/e/erprbzwkx.css';
import '../../css/s/swjd-ctvi.css';
import '../../css/i/ihxq05bkx.css';
import '../../css/o/o1en9sb-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(-90 12 18.4)" class="dxc5jkdys"/><circle transform="rotate(-90 12 18.4)" class="erprbzwkx"/><path class="swjd-ctvi"/><path class="ihxq05bkx"/><path class="o1en9sb-g"/></g>`,
		"fallback": "andrsrxn:timeline-annotations",
	});
}

export default Component;
