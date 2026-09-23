import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hqux45nwj.css';
import '../../css/f/f-lquyd8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hqux45nwj"/><path class="f-lquyd8h"/></g>`,
		"fallback": "keyline-icons:lightbulb-sparkles-fill",
	});
}

export default Component;
