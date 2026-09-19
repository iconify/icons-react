import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a886v4b5j.css';
import '../../css/d/dn_477skz.css';
import '../../css/t/tzu0hsycl.css';
import '../../css/i/imvbfud-d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a886v4b5j"/><path clip-rule="evenodd" class="dn_477skz"/><path class="tzu0hsycl"/><path clip-rule="evenodd" class="imvbfud-d"/></g>`,
		"fallback": "healthicons:synergist-insecticide-bioassays",
	});
}

export default Component;
