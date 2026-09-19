import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/d/drcfwfssl.css';
import '../../css/c/cwqqijblx.css';
import '../../css/p/pvh8y8bta.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="drcfwfssl"/><path class="cwqqijblx"/><path class="pvh8y8bta"/>`,
		"fallback": "fxemoji:sunglasses",
	});
}

export default Component;
