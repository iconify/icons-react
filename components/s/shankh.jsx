import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l0_d9_beu.css';
import '../../css/p/pq4u4ksec.css';
import '../../css/j/jr5oamekb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l0_d9_beu"/><path class="pq4u4ksec"/><path class="jr5oamekb wm-a"/></g>`,
		"fallback": "withicons:shankh",
	});
}

export default Component;
