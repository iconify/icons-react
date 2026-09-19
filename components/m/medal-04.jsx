import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/ob2kquzpi.css';
import '../../css/r/rc38l5tfq.css';
import '../../css/g/g9bnktb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ob2kquzpi"/><path class="rc38l5tfq"/><path class="g9bnktb9y"/></g>`,
		"fallback": "hugeicons:medal-04",
	});
}

export default Component;
