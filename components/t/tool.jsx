import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jwu_hjbwt.css';
import '../../css/l/lp-l2wbgw.css';
import '../../css/i/il_7q5b5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jwu_hjbwt"/><path class="lp-l2wbgw"/><path class="il_7q5b5s"/></g>`,
		"fallback": "andrsrxn:tool",
	});
}

export default Component;
