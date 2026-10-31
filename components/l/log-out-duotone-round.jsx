import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/imykr0b-k.css';
import '../../css/c/cnwm5tbgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="imykr0b-k"/><path class="cnwm5tbgj"/></g>`,
		"fallback": "coolicons:log-out-duotone-round",
	});
}

export default Component;
