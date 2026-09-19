import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhl7ahbil.css';
import '../../css/p/pwvx_w0yk.css';
import '../../css/w/w1db71bet.css';
import '../../css/t/tm5b5waxb.css';
import '../../css/d/dmot9tkhf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="rhl7ahbil"/><path class="pwvx_w0yk"/><path class="w1db71bet"/><circle class="tm5b5waxb"/><path class="dmot9tkhf"/>`,
		"fallback": "fxemoji:radiobutton",
	});
}

export default Component;
