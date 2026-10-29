import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/x4rgxab-s.css';
import '../../css/w/w0x38w6rx.css';
import '../../css/h/hulygx1ln.css';
import '../../css/u/uhc76--hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco x4rgxab-s"/><path class="w0x38w6rx wm-deco"/><path class="hulygx1ln wm-k"/><path class="uhc76--hq wm-a"/></g>`,
		"fallback": "withicons:shopping-bag-blueprint",
	});
}

export default Component;
