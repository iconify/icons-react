import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/c16lvpbmd.css';
import '../../css/e/eo4i8-bgh.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/p/p29my7dtm.css';
import '../../css/u/u7tu3_vxu.css';
import '../../css/t/t2d-3xa1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="c16lvpbmd wm-deco"/><path class="eo4i8-bgh wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="p29my7dtm wm-k"/><path class="u7tu3_vxu wm-a"/><path class="t2d-3xa1h wm-k"/></g>`,
		"fallback": "withicons:shield-plus-blueprint",
	});
}

export default Component;
