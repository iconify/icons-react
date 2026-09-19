import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wstva3b-l.css';
import '../../css/l/lnwbmf5ky.css';
import '../../css/o/ory6bvb6n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wstva3b-l"/><path clip-rule="evenodd" class="lnwbmf5ky"/><path class="ory6bvb6n"/></g>`,
		"fallback": "pepicons:internet",
	});
}

export default Component;
