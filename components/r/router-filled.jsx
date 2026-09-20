import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d41t4hb4s.css';
import '../../css/q/qm5nf-7wy.css';
import '../../css/k/k6pdl9s_w.css';
import '../../css/p/p5n3zo29p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d41t4hb4s"/><path class="qm5nf-7wy"/><path class="k6pdl9s_w"/><path clip-rule="evenodd" class="p5n3zo29p"/></g>`,
		"fallback": "reicon:router-filled",
	});
}

export default Component;
