import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/athar_bae.css';
import '../../css/t/tpg7dbavj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="athar_bae"/><path class="tpg7dbavj"/></g>`,
		"fallback": "solar:shop-minimalistic-bold-duotone",
	});
}

export default Component;
