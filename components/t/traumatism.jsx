import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ch1v3-bgw.css';
import '../../css/a/aev7hacfv.css';
import '../../css/k/kue5013mz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ch1v3-bgw"/><path class="aev7hacfv"/><path class="kue5013mz"/></g>`,
		"fallback": "healthicons:traumatism",
	});
}

export default Component;
