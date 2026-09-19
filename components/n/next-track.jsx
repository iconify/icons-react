import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s37yj4b_i.css';
import '../../css/k/k5fwq_p9i.css';
import '../../css/a/a1y0dmlic.css';
import '../../css/b/bocuyrlcq.css';
import '../../css/b/bb1u2n-kn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s37yj4b_i"/><path clip-rule="evenodd" class="k5fwq_p9i"/><path class="a1y0dmlic"/><path clip-rule="evenodd" class="bocuyrlcq"/><path clip-rule="evenodd" class="bb1u2n-kn"/></g>`,
		"fallback": "pepicons:next-track",
	});
}

export default Component;
