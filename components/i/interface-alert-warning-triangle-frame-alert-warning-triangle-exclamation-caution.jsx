import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xr_3yjbwe.css';
import '../../css/s/sv39nxb-k.css';
import '../../css/c/csarx2iyb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xr_3yjbwe"/><circle class="sv39nxb-k"/><path class="csarx2iyb"/></g>`,
		"fallback": "streamline:interface-alert-warning-triangle-frame-alert-warning-triangle-exclamation-caution",
	});
}

export default Component;
