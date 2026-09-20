import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m_k3-2btc.css';
import '../../css/q/qx3j3gbwq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="m_k3-2btc"/><path class="qx3j3gbwq"/></g>`,
		"fallback": "streamline:interface-arrows-data-transfer-vertical-arrow-square-data-internet-transfer-network-vertical",
	});
}

export default Component;
