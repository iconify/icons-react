import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t933p5bjg.css';
import '../../css/n/nqew7yb0d.css';
import '../../css/c/c9_66s66x.css';
import '../../css/e/ev47d1-as.css';
import '../../css/y/yd4f5xb8n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="t933p5bjg"/><path class="nqew7yb0d"/><path class="c9_66s66x"/><path class="ev47d1-as"/><path class="yd4f5xb8n"/></g>`,
		"fallback": "pepicons:open-print",
	});
}

export default Component;
