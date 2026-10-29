import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j059b4bmt.css';
import '../../css/w/whsol3bvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="j059b4bmt"/><path class="whsol3bvj wm-a"/></g>`,
		"fallback": "withicons:rose-solid",
	});
}

export default Component;
