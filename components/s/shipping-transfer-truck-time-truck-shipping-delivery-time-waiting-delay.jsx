import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jbnmsfymx.css';
import '../../css/b/bqylap52x.css';
import '../../css/x/xamz-ubxf.css';
import '../../css/u/uon_ffenw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="jbnmsfymx"/><circle class="bqylap52x"/><path class="xamz-ubxf"/><path class="uon_ffenw"/></g>`,
		"fallback": "streamline:shipping-transfer-truck-time-truck-shipping-delivery-time-waiting-delay",
	});
}

export default Component;
