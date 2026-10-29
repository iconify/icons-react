import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q--0hwt6f.css';
import '../../css/c/c0eqpw_oo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="q--0hwt6f"/><path class="c0eqpw_oo wm-a"/></g>`,
		"fallback": "withicons:lasso-solid",
	});
}

export default Component;
