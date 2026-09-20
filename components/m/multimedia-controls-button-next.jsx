import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/keb0ywb0m.css';
import '../../css/p/ph16zsbsr.css';
import '../../css/q/qcrrs-enw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="keb0ywb0m"/><path class="ph16zsbsr"/><path class="qcrrs-enw"/></g>`,
		"fallback": "streamline-freehand-color:multimedia-controls-button-next",
	});
}

export default Component;
