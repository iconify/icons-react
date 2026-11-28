import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bdymlsbob.css';
import '../../css/o/ojxgm5cln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bdymlsbob"/><path class="ojxgm5cln"/></g>`,
		"fallback": "iconaut:trending-down",
	});
}

export default Component;
