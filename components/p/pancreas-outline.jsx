import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nfkavlbtl.css';
import '../../css/s/srog96n4t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nfkavlbtl"/><path clip-rule="evenodd" class="srog96n4t"/></g>`,
		"fallback": "healthicons:pancreas-outline",
	});
}

export default Component;
