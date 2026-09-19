import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fc7gr3bdl.css';
import '../../css/p/pra_i-bub.css';
import '../../css/g/gh6r56btc.css';
import '../../css/q/qloxnbbrs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fc7gr3bdl"/><path class="pra_i-bub"/><path class="gh6r56btc"/><path clip-rule="evenodd" class="qloxnbbrs"/></g>`,
		"fallback": "healthicons:miner-worker-alt-outline",
	});
}

export default Component;
