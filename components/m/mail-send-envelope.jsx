import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p314bvb0h.css';
import '../../css/k/k_v9z9gok.css';
import '../../css/f/f39q7q5aw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p314bvb0h"/><path class="k_v9z9gok"/><path class="f39q7q5aw"/></g>`,
		"fallback": "streamline-flex-color:mail-send-envelope",
	});
}

export default Component;
