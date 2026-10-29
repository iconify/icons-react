import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e-n50bxlb.css';
import '../../css/p/piqtbiyhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="e-n50bxlb"/><path class="piqtbiyhu wm-s"/></g>`,
		"fallback": "withicons:paisley-solid",
	});
}

export default Component;
