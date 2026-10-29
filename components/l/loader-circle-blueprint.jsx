import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lmr25hber.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/t/twrukyb-k.css';
import '../../css/o/od9eo774w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="lmr25hber wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="twrukyb-k"/><path class="od9eo774w"/></g>`,
		"fallback": "withicons:loader-circle-blueprint",
	});
}

export default Component;
