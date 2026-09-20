import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/nxtylxbax.css';
import '../../css/n/ndwh9bcsg.css';
import '../../css/m/msxn8u5pj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="nxtylxbax"/><path class="ndwh9bcsg"/><path class="msxn8u5pj"/></g>`,
		"fallback": "keyline-icons:qr-code-sharp-duotone",
	});
}

export default Component;
