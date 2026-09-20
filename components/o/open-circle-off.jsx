import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cbvjzsq1u.css';
import '../../css/h/hdc_1zb4r.css';
import '../../css/u/u7b6urb1h.css';
import '../../css/p/ps4nekbve.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cbvjzsq1u"/><path class="hdc_1zb4r"/><path class="u7b6urb1h"/><path class="ps4nekbve"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:open-circle-off",
	});
}

export default Component;
