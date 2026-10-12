import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sr81aup5y.css';
import '../../css/h/hywic8b2t.css';
import '../../css/l/laj57ww4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(1 0 0 -1 14.65 21.18)" class="sr81aup5y"/><rect transform="matrix(1 0 0 -1 2.73 21.18)" class="hywic8b2t"/><path class="laj57ww4v"/></g>`,
		"fallback": "andrsrxn:panel-end-filled",
	});
}

export default Component;
