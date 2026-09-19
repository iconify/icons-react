import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sywyxcrdp.css';
import '../../css/o/ozq7jpbkt.css';
import '../../css/e/ev8vc4b6a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sywyxcrdp"/><path class="ozq7jpbkt"/><path clip-rule="evenodd" class="ev8vc4b6a"/></g>`,
		"fallback": "healthicons:miner-worker-outline",
	});
}

export default Component;
