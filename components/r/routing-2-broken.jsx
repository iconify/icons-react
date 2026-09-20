import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hwglx00ld.css';
import '../../css/o/ob4yjvgmw.css';
import '../../css/a/ahcst4d1u.css';
import '../../css/j/jwqfwqhfo.css';
import '../../css/s/s4y0i048y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hwglx00ld"/><path class="ob4yjvgmw"/><path class="ahcst4d1u"/><path class="jwqfwqhfo"/><path class="s4y0i048y"/></g>`,
		"fallback": "solar:routing-2-broken",
	});
}

export default Component;
