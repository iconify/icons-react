import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z0zpwrm_j.css';
import '../../css/v/vpev52slb.css';
import '../../css/p/p0zx2fg1f.css';
import '../../css/g/gydh0qoul.css';
import '../../css/v/vil3rbbxe.css';
import '../../css/i/i7hwqruak.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z0zpwrm_j"/><path clip-rule="evenodd" class="vpev52slb"/><path clip-rule="evenodd" class="p0zx2fg1f"/><path class="gydh0qoul"/><path clip-rule="evenodd" class="vil3rbbxe"/><path class="i7hwqruak"/></g>`,
		"fallback": "pepicons:train-print",
	});
}

export default Component;
