import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cwxjm2ojj.css';
import '../../css/n/nh70ojbcn.css';
import '../../css/j/jkczbp70i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cwxjm2ojj"/><path class="nh70ojbcn"/><path clip-rule="evenodd" class="jkczbp70i"/></g>`,
		"fallback": "healthicons:pulse-oximeter-outline",
	});
}

export default Component;
