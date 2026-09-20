import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nooq6zmfh.css';
import '../../css/x/xee1pjbri.css';
import '../../css/k/kmps4cbpe.css';
import '../../css/x/xyowvbscu.css';
import '../../css/l/lkjwdplgp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nooq6zmfh"/><path class="xee1pjbri"/><path clip-rule="evenodd" class="kmps4cbpe"/><path class="xyowvbscu"/><path class="lkjwdplgp"/></g>`,
		"fallback": "streamline-flex-color:left-click",
	});
}

export default Component;
