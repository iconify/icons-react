import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j44k1ormw.css';
import '../../css/m/mw5i2qouq.css';
import '../../css/h/hal8f3bya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j44k1ormw"/><path class="mw5i2qouq"/><path class="hal8f3bya"/></g>`,
		"fallback": "solar:smartphone-rotate-2-broken",
	});
}

export default Component;
