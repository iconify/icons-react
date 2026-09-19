import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/q/qimkehb6h.css';
import '../../css/n/nbdifrb_t.css';
import '../../css/m/mxfwz8lur.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="qimkehb6h"/><path class="nbdifrb_t"/><path class="mxfwz8lur"/>`,
		"fallback": "fxemoji:sleepy",
	});
}

export default Component;
