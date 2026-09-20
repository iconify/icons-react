import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xcv6q1bnv.css';
import '../../css/v/vhgfm0bir.css';
import '../../css/w/w5-cplbmd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="xcv6q1bnv"/><path class="vhgfm0bir"/><circle class="w5-cplbmd"/></g>`,
		"fallback": "streamline:interface-alert-information-circle-information-frame-info-more-help-point-circle",
	});
}

export default Component;
