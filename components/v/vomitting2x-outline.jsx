import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lhlgm2lyy.css';
import '../../css/o/ozxnukb5t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lhlgm2lyy"/><path clip-rule="evenodd" class="ozxnukb5t"/></g>`,
		"fallback": "healthicons:vomitting2x-outline",
	});
}

export default Component;
