import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lft_p3rrx.css';
import '../../css/d/dn2n-ml1t.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lft_p3rrx"/><path clip-rule="evenodd" class="dn2n-ml1t"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:smartphone-cutout-off",
	});
}

export default Component;
