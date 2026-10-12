import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pq-mt92dg.css';
import '../../css/b/b13w1nhed.css';
import '../../css/x/x0x96ubmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pq-mt92dg"/><path class="b13w1nhed"/><path class="x0x96ubmz"/></g>`,
		"fallback": "lucide-extended:layout-panel-left-duotone",
	});
}

export default Component;
