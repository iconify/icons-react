import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/u_yrg3bqj.css';
import '../../css/z/zc1-k1bwf.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/s/szu58q-yo.css';
import '../../css/q/qv4e6yckx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="u_yrg3bqj wm-deco"/><path class="wm-deco zc1-k1bwf"/><path class="o7-ag87sb wm-deco"/><path class="szu58q-yo wm-k"/><path class="qv4e6yckx wm-a"/></g>`,
		"fallback": "withicons:stamp-blueprint",
	});
}

export default Component;
