import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol1qgland.css';
import '../../css/x/xvzaotb_b.css';
import '../../css/g/g0av7_f0k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ol1qgland"><path class="xvzaotb_b"/><path class="g0av7_f0k"/></g>`,
		"fallback": "icon-park-outline:natural-mode",
	});
}

export default Component;
