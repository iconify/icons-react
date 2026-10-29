import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/y4c4vzbsv.css';
import '../../css/q/qoohwwbig.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/u/ug-g1ubih.css';
import '../../css/s/sl8n1s6xr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco y4c4vzbsv"/><path class="qoohwwbig wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="ug-g1ubih wm-k"/><path class="sl8n1s6xr wm-a"/></g>`,
		"fallback": "withicons:shopping-basket-blueprint",
	});
}

export default Component;
