import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bwe_218us.css';
import '../../css/k/k2skpw02v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bwe_218us"/><path class="k2skpw02v"/></g>`,
		"fallback": "coolicons:panel-left-open-bulk-round",
	});
}

export default Component;
