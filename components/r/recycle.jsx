import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zeb_shwns.css';
import '../../css/p/pmmrnlbfn.css';
import '../../css/n/ni0fmjbjq.css';
import '../../css/v/voqh_0p7f.css';
import '../../css/z/zv--nortx.css';
import '../../css/k/k2zoxybtb.css';

const viewBox = {"width":99,"height":99};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zeb_shwns"/><path class="pmmrnlbfn"/><path class="ni0fmjbjq"/><path class="voqh_0p7f"/><path class="zv--nortx"/><path class="k2zoxybtb"/></g>`,
		"fallback": "glyphs-poly:recycle",
	});
}

export default Component;
