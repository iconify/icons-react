import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/ariiyj0op.css';
import '../../css/g/g0ga7n_6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ariiyj0op"/><path class="g0ga7n_6m"/></g>`,
		"fallback": "matita:rho",
	});
}

export default Component;
