import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gf_l4bcfr.css';
import '../../css/g/gap_aabgc.css';
import '../../css/z/z656bjbcd.css';
import '../../css/w/w-4_xvbmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gf_l4bcfr"/><path clip-rule="evenodd" class="gap_aabgc"/><path class="z656bjbcd"/><path clip-rule="evenodd" class="w-4_xvbmg"/></g>`,
		"fallback": "reicon:money-bills",
	});
}

export default Component;
