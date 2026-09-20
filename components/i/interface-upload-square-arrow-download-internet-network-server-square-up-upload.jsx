import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m_k3-2btc.css';
import '../../css/b/br_2g6tnz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="m_k3-2btc"/><path class="br_2g6tnz"/></g>`,
		"fallback": "streamline:interface-upload-square-arrow-download-internet-network-server-square-up-upload",
	});
}

export default Component;
