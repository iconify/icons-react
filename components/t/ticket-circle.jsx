import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/d/dz7pgzvev.css';
import '../../css/q/q1ewx2bpi.css';
import '../../css/p/pt8y-ge4v.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path class="dz7pgzvev"/><path clip-rule="evenodd" class="q1ewx2bpi"/><path clip-rule="evenodd" class="pt8y-ge4v"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:ticket-circle",
	});
}

export default Component;
