import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yz3t0s22g.css';
import '../../css/w/wtzvhdbph.css';
import '../../css/m/mz920dbnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yz3t0s22g"/><path class="wtzvhdbph"/><path class="mz920dbnl"/></g>`,
		"fallback": "streamline-freehand-color:retouch-contrast",
	});
}

export default Component;
