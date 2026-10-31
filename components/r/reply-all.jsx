import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/e/e-vo4ab5q.css';
import '../../css/i/i95lw_nwp.css';
import '../../css/o/og5669pjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="e-vo4ab5q wm-k"/><path class="i95lw_nwp wm-a"/><path class="og5669pjp wm-deco"/></g>`,
		"fallback": "withicons-kawaii:reply-all",
	});
}

export default Component;
