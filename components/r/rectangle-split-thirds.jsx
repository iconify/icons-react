import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qa7bqu8lb.css';
import '../../css/t/t56texbkf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qa7bqu8lb"/><path class="t56texbkf"/></g>`,
		"fallback": "streamline-flex-color:rectangle-split-thirds",
	});
}

export default Component;
