import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hjiigcffe.css';
import '../../css/d/dpcui9bzv.css';
import '../../css/b/b6-q3zz5m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="hjiigcffe"/><circle class="dpcui9bzv"/><circle class="b6-q3zz5m"/></g>`,
		"fallback": "streamline:shipping-transfer-truck-truck-shipping-delivery",
	});
}

export default Component;
