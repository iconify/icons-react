import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qodv1-buf.css';
import '../../css/u/u4b819bdl.css';
import '../../css/b/bw3e3bcaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qodv1-buf"/><path class="u4b819bdl"/><path class="bw3e3bcaj"/></g>`,
		"fallback": "hugeicons:sushi-03",
	});
}

export default Component;
