import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x-8ter4yn.css';
import '../../css/d/dndb2vpww.css';
import '../../css/b/b9udazptr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x-8ter4yn"/><path clip-rule="evenodd" class="dndb2vpww"/><path class="b9udazptr"/></g>`,
		"fallback": "healthicons:peso-outline",
	});
}

export default Component;
