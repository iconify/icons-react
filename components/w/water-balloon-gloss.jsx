import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p9t6dbowy.css';
import '../../css/f/fy7-d_5_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="p9t6dbowy wm-k"/><path class="fy7-d_5_x wm-a"/></g>`,
		"fallback": "withicons:water-balloon-gloss",
	});
}

export default Component;
