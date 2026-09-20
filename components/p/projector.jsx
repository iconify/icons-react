import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e8x3qxbvw.css';
import '../../css/a/ay-y4bf7s.css';
import '../../css/d/d4pnxhbqs.css';
import '../../css/f/fin17rrbl.css';
import '../../css/q/qvx8aibxe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e8x3qxbvw"/><path class="ay-y4bf7s"/><path clip-rule="evenodd" class="d4pnxhbqs"/><path class="fin17rrbl"/><path class="qvx8aibxe"/></g>`,
		"fallback": "streamline-flex-color:projector",
	});
}

export default Component;
