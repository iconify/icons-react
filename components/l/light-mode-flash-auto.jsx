import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/okxfg4bho.css';
import '../../css/c/cen018b4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="okxfg4bho"/><path class="cen018b4r"/></g>`,
		"fallback": "streamline-freehand-color:light-mode-flash-auto",
	});
}

export default Component;
