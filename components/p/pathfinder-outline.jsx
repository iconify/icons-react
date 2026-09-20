import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/hhdsr1m_k.css';
import '../../css/i/ijy9h-xoq.css';
import '../../css/n/nwezj1qqd.css';
import '../../css/i/irjzw_e-l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="hhdsr1m_k"/><path class="ijy9h-xoq"/><path class="nwezj1qqd"/><path class="irjzw_e-l"/></g>`,
		"fallback": "streamline-plump-color:pathfinder-outline",
	});
}

export default Component;
