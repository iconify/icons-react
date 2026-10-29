import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/cq7wpkkej.css';
import '../../css/x/xjplfn8nt.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/u/uuf9tvb0w.css';
import '../../css/d/d0t9jmkyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="cq7wpkkej wm-deco"/><path class="wm-deco xjplfn8nt"/><path class="o7-ag87sb wm-deco"/><path class="uuf9tvb0w"/><path class="d0t9jmkyi"/></g>`,
		"fallback": "withicons:laddoo-blueprint",
	});
}

export default Component;
