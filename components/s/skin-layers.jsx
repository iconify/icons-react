import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u2p9ufbor.css';
import '../../css/r/r94k25jwb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u2p9ufbor"/><path class="r94k25jwb"/></g>`,
		"fallback": "healthicons:skin-layers",
	});
}

export default Component;
