import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/e3_kghb0h.css';
import '../../css/b/bxjv56brc.css';
import '../../css/z/z1na97b4p.css';
import '../../css/k/kfe9-3bvk.css';
import '../../css/w/wvayo5bck.css';
import '../../css/y/ym8flzbsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="e3_kghb0h wm-deco"/><path class="bxjv56brc wm-deco"/><path class="wm-k z1na97b4p"/><path class="kfe9-3bvk wm-a"/><path class="wm-k wvayo5bck"/><path class="wm-a ym8flzbsz"/></g>`,
		"fallback": "withicons:undo-blueprint",
	});
}

export default Component;
