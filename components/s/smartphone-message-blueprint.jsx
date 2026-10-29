import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/f60v5qb5x.css';
import '../../css/r/rmox5t-1p.css';
import '../../css/x/xupe0ib4r.css';
import '../../css/j/j4vloz-tr.css';
import '../../css/p/pm96j7xxh.css';
import '../../css/w/wiker-buu.css';
import '../../css/m/miuy3cssn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="f60v5qb5x wm-deco"/><path class="rmox5t-1p wm-deco"/><path class="wm-deco xupe0ib4r"/><path class="j4vloz-tr wm-k"/><path class="pm96j7xxh wm-a"/><path class="wiker-buu wm-s"/><path class="miuy3cssn wm-k"/></g>`,
		"fallback": "withicons:smartphone-message-blueprint",
	});
}

export default Component;
