import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5y7a56du.css';
import '../../css/u/u_gpcgu-s.css';
import '../../css/w/w6qr91ntb.css';
import '../../css/m/m_1s-6-7n.css';
import '../../css/g/g3w2wqbtg.css';
import '../../css/n/n-o2k4boe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5y7a56du"/><path class="u_gpcgu-s"/><path class="w6qr91ntb"/><path class="m_1s-6-7n"/><path class="g3w2wqbtg"/><path class="n-o2k4boe"/>`,
		"fallback": "fxemoji:newspaper",
	});
}

export default Component;
