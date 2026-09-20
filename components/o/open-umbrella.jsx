import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bbtfehagh.css';
import '../../css/d/dt8c3f3gk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bbtfehagh"/><path class="dt8c3f3gk"/></g>`,
		"fallback": "streamline-flex-color:open-umbrella",
	});
}

export default Component;
