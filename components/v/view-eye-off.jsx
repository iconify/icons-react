import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dxfoa2biv.css';
import '../../css/x/xne07zbte.css';
import '../../css/y/ydynjgp1t.css';
import '../../css/b/ba_9p4wve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dxfoa2biv"/><path class="xne07zbte"/><path class="ydynjgp1t"/><path class="ba_9p4wve"/></g>`,
		"fallback": "streamline-freehand-color:view-eye-off",
	});
}

export default Component;
