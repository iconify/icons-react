import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bwjur_wea.css';
import '../../css/y/yx4p06daa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bwjur_wea wm-k"/><path class="wm-a yx4p06daa"/></g>`,
		"fallback": "withicons:luggage-gloss",
	});
}

export default Component;
