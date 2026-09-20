import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwk4867sm.css';
import '../../css/n/n7yph_i7l.css';
import '../../css/q/qr-5js_2c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwk4867sm"/><path class="n7yph_i7l"/><path class="qr-5js_2c"/>`,
		"fallback": "selfhst:ksuite-kchat-dark",
	});
}

export default Component;
