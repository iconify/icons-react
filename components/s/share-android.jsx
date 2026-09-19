import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sl42frb6n.css';
import '../../css/r/rpt9gwpze.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sl42frb6n"/><path class="rpt9gwpze"/></g>`,
		"fallback": "pepicons:share-android",
	});
}

export default Component;
