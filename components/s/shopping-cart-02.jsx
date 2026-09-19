import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vs4yqp74u.css';
import '../../css/o/o50ddxiay.css';
import '../../css/b/b-v3dtbhs.css';
import '../../css/f/fe1mv7ygx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vs4yqp74u"/><circle class="o50ddxiay"/><circle class="b-v3dtbhs"/><path class="fe1mv7ygx"/></g>`,
		"fallback": "hugeicons:shopping-cart-02",
	});
}

export default Component;
