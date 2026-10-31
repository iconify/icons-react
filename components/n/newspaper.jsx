import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rop_owbjb.css';
import '../../css/b/blpwv3m3j.css';
import '../../css/t/t2b_cg1kg.css';
import '../../css/k/kgsw_n3ha.css';
import '../../css/c/c3ljb-p0h.css';
import '../../css/t/tws7nac8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rop_owbjb wm-k"/><path class="blpwv3m3j wm-deco"/><path class="t2b_cg1kg wm-k"/><path class="kgsw_n3ha wm-k"/><path class="c3ljb-p0h wm-shadow"/><path class="tws7nac8t wm-shine"/></g>`,
		"fallback": "withicons-valentine:newspaper",
	});
}

export default Component;
