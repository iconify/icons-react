import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nkbistf8y.css';
import '../../css/p/p9fbmfymw.css';
import '../../css/c/c2sl7yebp.css';
import '../../css/m/m-wlajwqd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nkbistf8y"/><path clip-rule="evenodd" class="p9fbmfymw"/><path clip-rule="evenodd" class="c2sl7yebp"/><path class="m-wlajwqd"/></g>`,
		"fallback": "healthicons:lactose-free2x-outline",
	});
}

export default Component;
