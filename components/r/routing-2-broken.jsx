import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hwglx00ld.css';
import '../../css/o/ob4yjvgmw.css';
import '../../css/a/a_byftb3a.css';
import '../../css/j/jwqfwqhfo.css';
import '../../css/l/l_b11_mku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hwglx00ld"/><path class="ob4yjvgmw"/><path class="a_byftb3a"/><path class="jwqfwqhfo"/><path class="l_b11_mku"/></g>`,
		"fallback": "solar:routing-2-broken",
	});
}

export default Component;
