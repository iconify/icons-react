import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wmzeeu32g.css';
import '../../css/p/peiq2hfxm.css';
import '../../css/d/dk6s0gbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle transform="rotate(-90 12 18)" class="wmzeeu32g"/><circle transform="rotate(-90 12 12)" class="peiq2hfxm"/><circle transform="rotate(-90 12 6)" class="dk6s0gbmm"/></g>`,
		"fallback": "proicons:more-vertical",
	});
}

export default Component;
