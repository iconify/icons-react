import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wk0ignbhf.css';
import '../../css/q/qrm6jlbhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wk0ignbhf"/><path class="qrm6jlbhw"/></g>`,
		"fallback": "coolicons:scooter-duotone-round",
	});
}

export default Component;
