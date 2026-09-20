import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n4yu2qugy.css';
import '../../css/x/xcv6q1bnv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="n4yu2qugy"/><circle class="xcv6q1bnv"/></g>`,
		"fallback": "streamline:interface-arrows-move-horizontal-circle-transfer-data-internet-arrow-horizontal-network-circle",
	});
}

export default Component;
