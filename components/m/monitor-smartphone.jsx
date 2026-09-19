import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vlwthcb-o.css';
import '../../css/s/szv0abf7p.css';
import '../../css/t/t0po4kjqp.css';
import '../../css/q/qzuozacwt.css';
import '../../css/g/gw4m2objp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vlwthcb-o"/><path class="szv0abf7p"/><path class="t0po4kjqp"/><path class="qzuozacwt"/><path class="gw4m2objp"/></g>`,
		"fallback": "hugeicons:monitor-smartphone",
	});
}

export default Component;
