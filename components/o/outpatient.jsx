import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uce-bntae.css';
import '../../css/m/moip_4bnz.css';
import '../../css/f/fkcgkpbyg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uce-bntae"/><path clip-rule="evenodd" class="moip_4bnz"/><path class="fkcgkpbyg"/></g>`,
		"fallback": "healthicons:outpatient",
	});
}

export default Component;
