import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kspt8ybks.css';
import '../../css/c/cuhczmb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kspt8ybks"/><path class="cuhczmb2v"/></g>`,
		"fallback": "solar:medal-ribbon-bold",
	});
}

export default Component;
