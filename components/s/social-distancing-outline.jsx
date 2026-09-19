import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ks7nftbhv.css';
import '../../css/e/exylfw3hr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ks7nftbhv"/><path clip-rule="evenodd" class="exylfw3hr"/></g>`,
		"fallback": "healthicons:social-distancing-outline",
	});
}

export default Component;
