import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t3_l9ubrw.css';
import '../../css/b/b0caljujn.css';
import '../../css/b/br6u71brj.css';
import '../../css/o/ons53cb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="t3_l9ubrw"/><path class="b0caljujn"/><path class="br6u71brj"/><circle class="ons53cb4g"/></g>`,
		"fallback": "hugeicons:soda-can",
	});
}

export default Component;
