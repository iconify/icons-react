import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/e/e474-ib2b.css';
import '../../css/z/zm4iilbpm.css';
import '../../css/f/ffkddcbxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="e474-ib2b wm-k"/><path class="wm-a zm4iilbpm"/><path class="ffkddcbxp wm-deco"/></g>`,
		"fallback": "withicons-kawaii:swap",
	});
}

export default Component;
