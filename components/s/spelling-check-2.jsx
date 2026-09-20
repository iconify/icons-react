import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w7an4rb8g.css';
import '../../css/e/eays0rbix.css';
import '../../css/g/gvmznkb0r.css';
import '../../css/b/bgei7lb_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w7an4rb8g"/><path class="eays0rbix"/><path class="gvmznkb0r"/><path class="bgei7lb_i"/></g>`,
		"fallback": "streamline-cyber-color:spelling-check-2",
	});
}

export default Component;
