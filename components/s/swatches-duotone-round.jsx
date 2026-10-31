import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kwm82p41q.css';
import '../../css/s/sbtvxobot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kwm82p41q"/><path class="sbtvxobot"/></g>`,
		"fallback": "coolicons:swatches-duotone-round",
	});
}

export default Component;
