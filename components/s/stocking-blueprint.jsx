import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jhdu2jbve.css';
import '../../css/i/im154wbuh.css';
import '../../css/w/wgdw9fsnj.css';
import '../../css/o/o25cc4zjh.css';
import '../../css/g/gd4v5cbxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="jhdu2jbve wm-deco"/><path class="im154wbuh wm-deco"/><path class="wgdw9fsnj wm-deco"/><path class="o25cc4zjh wm-k"/><path class="gd4v5cbxf wm-a"/></g>`,
		"fallback": "withicons:stocking-blueprint",
	});
}

export default Component;
