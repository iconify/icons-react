import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a04pjnbax.css';
import '../../css/f/fg8_02k5r.css';
import '../../css/y/yegt60bru.css';
import '../../css/c/cl2ti-b5h.css';
import '../../css/g/gtm7-0b9d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a04pjnbax"/><path class="fg8_02k5r"/><path class="yegt60bru"/><path class="cl2ti-b5h"/><path class="gtm7-0b9d"/>`,
		"fallback": "fxemoji:sheep",
	});
}

export default Component;
