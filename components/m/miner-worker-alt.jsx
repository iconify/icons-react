import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wi4bmnkdl.css';
import '../../css/p/pra_i-bub.css';
import '../../css/g/gh6r56btc.css';
import '../../css/m/mpqbsvblm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wi4bmnkdl"/><path class="pra_i-bub"/><path class="gh6r56btc"/><path clip-rule="evenodd" class="mpqbsvblm"/></g>`,
		"fallback": "healthicons:miner-worker-alt",
	});
}

export default Component;
