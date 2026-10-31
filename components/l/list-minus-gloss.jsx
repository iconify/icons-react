import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/ug433ib-i.css';
import '../../css/c/cydd43dkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ug433ib-i wm-k"/><path class="cydd43dkj wm-s"/></g>`,
		"fallback": "withicons:list-minus-gloss",
	});
}

export default Component;
