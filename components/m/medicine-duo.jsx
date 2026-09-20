import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rzk6tablr.css';
import '../../css/q/qojpxl_qk.css';
import '../../css/e/e6sif6niy.css';
import '../../css/h/h1svk9bfb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rzk6tablr"/><path class="qojpxl_qk"/><path clip-rule="evenodd" class="e6sif6niy"/><path class="h1svk9bfb"/></g>`,
		"fallback": "streamline-kameleon-color:medicine-duo",
	});
}

export default Component;
