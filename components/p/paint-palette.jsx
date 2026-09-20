import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/tgg1qh8_p.css';
import '../../css/y/yus3zr2gn.css';
import '../../css/n/ng52b5k0e.css';
import '../../css/d/dcdv1rbmv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="tgg1qh8_p"/><path class="yus3zr2gn"/><path class="ng52b5k0e"/><path class="dcdv1rbmv"/></g>`,
		"fallback": "streamline-plump-color:paint-palette",
	});
}

export default Component;
