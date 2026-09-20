import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/br_2g6tnz.css';
import '../../css/x/xcv6q1bnv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="br_2g6tnz"/><circle class="xcv6q1bnv"/></g>`,
		"fallback": "streamline:interface-upload-circle-arrow-circle-download-internet-network-server-up-upload",
	});
}

export default Component;
