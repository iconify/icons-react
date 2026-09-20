import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kspt8ybks.css';
import '../../css/z/zvdgzebmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kspt8ybks"/><path clip-rule="evenodd" class="zvdgzebmb"/></g>`,
		"fallback": "solar:medal-ribbon-star-bold",
	});
}

export default Component;
