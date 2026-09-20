import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v75v0irot.css';
import '../../css/s/sso8-kyle.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="v75v0irot"/><path class="sso8-kyle"/></g>`,
		"fallback": "streamline:shipping-box-2-box-package-label-delivery-shipment-shipping-3d",
	});
}

export default Component;
