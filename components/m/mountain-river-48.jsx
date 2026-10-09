import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx5i_8glh.css';
import '../../css/u/uyhqdeb9l.css';
import '../../css/u/ua2_qkbcq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx5i_8glh"/><path class="uyhqdeb9l"/><path class="ua2_qkbcq"/>`,
		"fallback": "energy-icons:mountain-river-48",
	});
}

export default Component;
