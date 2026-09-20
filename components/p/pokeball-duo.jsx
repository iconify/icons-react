import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wq1h-tb3p.css';
import '../../css/c/co_qzcczq.css';
import '../../css/o/oiri56m4m.css';
import '../../css/t/ta28g-b_h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wq1h-tb3p"/><path class="co_qzcczq"/><path class="oiri56m4m"/><path class="ta28g-b_h"/></g>`,
		"fallback": "streamline-kameleon-color:pokeball-duo",
	});
}

export default Component;
