import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/d6l1jnyly.css';
import '../../css/y/ynb_0bb6c.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/f/f1552lbol.css';
import '../../css/u/ugu995blq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="d6l1jnyly wm-deco"/><path class="wm-deco ynb_0bb6c"/><path class="o7-ag87sb wm-deco"/><path class="f1552lbol"/><path class="ugu995blq"/></g>`,
		"fallback": "withicons:kalash-blueprint",
	});
}

export default Component;
