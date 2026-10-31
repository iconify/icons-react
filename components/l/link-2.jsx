import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/o/ov_robb3s.css';
import '../../css/y/y875pzbpu.css';
import '../../css/w/wg-8r2bsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ov_robb3s wm-k"/><path class="wm-a y875pzbpu"/><path class="wg-8r2bsi wm-deco"/></g>`,
		"fallback": "withicons-kawaii:link-2",
	});
}

export default Component;
