import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pencc_bck.css';
import '../../css/b/bioz_2b6d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pencc_bck"/><path class="bioz_2b6d"/></g>`,
		"fallback": "rivet-icons:lightning-box",
	});
}

export default Component;
