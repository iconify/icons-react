import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mw-_idb5r.css';
import '../../css/b/b6vs7ccwa.css';
import '../../css/c/crjue3bgv.css';
import '../../css/e/efyoftowq.css';

const viewBox = {"width":41,"height":41,"top":-0.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mw-_idb5r"/><path class="b6vs7ccwa"/><path class="crjue3bgv"/><path class="efyoftowq"/></g>`,
		"fallback": "streamline-stickies-color:labtop",
	});
}

export default Component;
