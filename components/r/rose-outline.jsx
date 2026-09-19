import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgl5x5s_q.css';
import '../../css/x/xa0d2nb-v.css';
import '../../css/v/ve76htc7s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgl5x5s_q"/><path class="xa0d2nb-v"/><path class="ve76htc7s"/>`,
		"fallback": "ion:rose-outline",
	});
}

export default Component;
