import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qhtj4_b-m.css';
import '../../css/d/d6rnawmui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qhtj4_b-m"/><path class="d6rnawmui"/></g>`,
		"fallback": "nrk:speech-bubble-plus",
	});
}

export default Component;
