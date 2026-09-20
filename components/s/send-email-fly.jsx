import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nk364mb1y.css';
import '../../css/b/bu4bs2ble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nk364mb1y"/><path class="bu4bs2ble"/></g>`,
		"fallback": "streamline-freehand-color:send-email-fly",
	});
}

export default Component;
