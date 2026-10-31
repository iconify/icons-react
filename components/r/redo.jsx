import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/n/nabjto59j.css';
import '../../css/e/e7970wbtu.css';
import '../../css/t/tdwb05b8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="nabjto59j wm-k"/><path class="e7970wbtu wm-a"/><path class="tdwb05b8n wm-deco"/></g>`,
		"fallback": "withicons-kawaii:redo",
	});
}

export default Component;
