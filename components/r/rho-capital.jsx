import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/qb0u65bbb.css';
import '../../css/s/szy6p58ut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="qb0u65bbb"/><path class="szy6p58ut"/></g>`,
		"fallback": "matita:rho-capital",
	});
}

export default Component;
