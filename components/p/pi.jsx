import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/x/xipf1qcsp.css';
import '../../css/r/r4gai5bjn.css';
import '../../css/l/lf-g9db-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="xipf1qcsp"/><path class="r4gai5bjn"/><path class="lf-g9db-s"/></g>`,
		"fallback": "matita:pi",
	});
}

export default Component;
