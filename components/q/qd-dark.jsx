import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krnj30b0h.css';
import '../../css/w/w2y0uhb-m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krnj30b0h"/><path class="w2y0uhb-m"/>`,
		"fallback": "selfhst:qd-dark",
	});
}

export default Component;
