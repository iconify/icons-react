import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s6-hksbbv.css';
import '../../css/j/jkdy_qbri.css';
import '../../css/d/ddzl1cbzf.css';
import '../../css/x/xf6tmeb5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s6-hksbbv"/><path class="jkdy_qbri"/><path class="ddzl1cbzf"/><path class="xf6tmeb5h"/></g>`,
		"fallback": "reicon:smart-home2",
	});
}

export default Component;
