import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/s_odbi9ry.css';
import '../../css/k/koi_40_qj.css';
import '../../css/t/t7mwtvffu.css';
import '../../css/b/b99_c-p4h.css';
import '../../css/m/mk0jyeo_d.css';
import '../../css/c/comv-1dst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="s_odbi9ry wm-deco"/><path class="koi_40_qj wm-deco"/><path class="t7mwtvffu wm-k"/><path class="b99_c-p4h wm-a"/><path class="mk0jyeo_d wm-k"/><path class="comv-1dst wm-a"/></g>`,
		"fallback": "withicons:list-tree-blueprint",
	});
}

export default Component;
