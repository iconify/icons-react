import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p6ohrn0tl.css';
import '../../css/y/yy7lrjbgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="p6ohrn0tl"/><path class="wm-a yy7lrjbgh"/></g>`,
		"fallback": "withicons:puja-thali-solid",
	});
}

export default Component;
