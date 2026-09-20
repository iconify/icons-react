import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wevb7d9og.css';
import '../../css/g/g10avn-2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wevb7d9og"/><path class="g10avn-2n"/></g>`,
		"fallback": "streamline-freehand-color:push-notification-2",
	});
}

export default Component;
