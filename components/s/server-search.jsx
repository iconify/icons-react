import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f8lud0bbk.css';
import '../../css/m/m38n5ebmk.css';
import '../../css/j/j_e93hhyk.css';
import '../../css/f/fbg45xzkt.css';
import '../../css/i/izb20nb-l.css';
import '../../css/l/lc0wjuczu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-90 1.78 9)" class="f8lud0bbk"/><path class="m38n5ebmk"/><rect transform="rotate(-90 1.78 9)" class="j_e93hhyk"/><path class="fbg45xzkt"/><path class="izb20nb-l"/><path class="lc0wjuczu"/></g>`,
		"fallback": "andrsrxn:server-search",
	});
}

export default Component;
