import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m_k3-2btc.css';
import '../../css/t/t4zkhi1vq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="m_k3-2btc"/><path class="t4zkhi1vq"/></g>`,
		"fallback": "streamline:interface-signal-square-heart-line-stats-beat-square-graph",
	});
}

export default Component;
