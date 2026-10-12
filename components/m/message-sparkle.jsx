import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ujp1u7bgy.css';
import '../../css/f/fv3l_rq4r.css';
import '../../css/v/vi8q8acob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ujp1u7bgy"/><path class="fv3l_rq4r"/><path class="vi8q8acob"/></g>`,
		"fallback": "andrsrxn:message-sparkle",
	});
}

export default Component;
