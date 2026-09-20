import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/x6el6pbcn.css';
import '../../css/l/l0jkubb8s.css';
import '../../css/q/qmb_m_bid.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path clip-rule="evenodd" class="x6el6pbcn"/><path clip-rule="evenodd" class="l0jkubb8s"/><path class="qmb_m_bid"/></g>`,
		"fallback": "streamline-plump-color:voice-scan-1",
	});
}

export default Component;
