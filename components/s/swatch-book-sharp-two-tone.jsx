import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xntt-lbbf.css';
import '../../css/m/mj1i6js7i.css';
import '../../css/e/em8goyshd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xntt-lbbf"/><path class="mj1i6js7i"/><path class="em8goyshd"/></g>`,
		"fallback": "keyline-icons:swatch-book-sharp-two-tone",
	});
}

export default Component;
