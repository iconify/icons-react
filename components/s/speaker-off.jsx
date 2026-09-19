import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cay9w4bva.css';
import '../../css/d/dz2lb19zc.css';
import '../../css/a/ahgurpb-c.css';
import '../../css/b/b1n_z_e3z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cay9w4bva"/><path class="dz2lb19zc"/><path class="ahgurpb-c"/><path class="b1n_z_e3z"/></g>`,
		"fallback": "pepicons:speaker-off",
	});
}

export default Component;
