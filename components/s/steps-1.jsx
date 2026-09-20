import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/pw09ep_1j.css';
import '../../css/q/qdev1pbxg.css';
import '../../css/z/z7k_8bb_d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="pw09ep_1j"/><path class="qdev1pbxg"/><path class="z7k_8bb_d"/></g>`,
		"fallback": "streamline-plump-color:steps-1",
	});
}

export default Component;
