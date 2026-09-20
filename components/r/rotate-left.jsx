import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/q/q7davfbfc.css';
import '../../css/s/s0p3r_bxo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="q7davfbfc"/><path class="s0p3r_bxo"/></g>`,
		"fallback": "streamline-plump-color:rotate-left",
	});
}

export default Component;
