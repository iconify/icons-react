import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hjo1he0av.css';
import '../../css/q/qd1g9obrp.css';
import '../../css/o/o6s2xc_ss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="hjo1he0av wm-shadow"/><path class="qd1g9obrp wm-shadow"/><path class="o6s2xc_ss"/></g>`,
		"fallback": "withicons-brutal:sort-alpha",
	});
}

export default Component;
