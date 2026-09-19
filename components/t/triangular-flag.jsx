import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qyxx6rbvn.css';
import '../../css/b/bgcwa6fso.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qyxx6rbvn"/><path class="bgcwa6fso"/></g>`,
		"fallback": "fluent-emoji-flat:triangular-flag",
	});
}

export default Component;
