import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/i/ivxrekmga.css';
import '../../css/m/medoh8h0u.css';
import '../../css/q/qx2jmxlkz.css';
import '../../css/l/l-s5yyt6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ivxrekmga"/><path class="medoh8h0u"/><path class="qx2jmxlkz"/><path class="l-s5yyt6b"/></g>`,
		"fallback": "streamline-sharp-color:transfer-cart",
	});
}

export default Component;
