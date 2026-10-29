import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/uotvl1b4w.css';
import '../../css/p/pv30z8bal.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/t/t0rlo3ziq.css';
import '../../css/x/x01h07e1m.css';
import '../../css/o/odkg9rbes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="uotvl1b4w wm-deco"/><path class="pv30z8bal wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="t0rlo3ziq wm-k"/><path class="wm-a x01h07e1m"/><path class="odkg9rbes wm-a"/></g>`,
		"fallback": "withicons:layers-blueprint",
	});
}

export default Component;
