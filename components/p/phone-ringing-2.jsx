import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y2813uboe.css';
import '../../css/e/eb_yoqn1e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y2813uboe"/><path class="eb_yoqn1e"/></g>`,
		"fallback": "streamline-color:phone-ringing-2",
	});
}

export default Component;
