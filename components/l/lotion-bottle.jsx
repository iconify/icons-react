import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/watxo_a7v.css';
import '../../css/p/py6u8gb0r.css';
import '../../css/t/tld99tb5o.css';
import '../../css/g/gf3g1zbno.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="watxo_a7v"/><path class="py6u8gb0r"/><path class="tld99tb5o"/><path class="gf3g1zbno"/></g>`,
		"fallback": "fluent-emoji-flat:lotion-bottle",
	});
}

export default Component;
