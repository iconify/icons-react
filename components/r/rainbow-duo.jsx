import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wq1h-tb3p.css';
import '../../css/i/iy1n2hbtc.css';
import '../../css/t/t_h4aackq.css';
import '../../css/j/jb-6-hqnl.css';
import '../../css/p/pi5sz3bgz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wq1h-tb3p"/><path class="iy1n2hbtc"/><path clip-rule="evenodd" class="t_h4aackq"/><path clip-rule="evenodd" class="jb-6-hqnl"/><path clip-rule="evenodd" class="pi5sz3bgz"/></g>`,
		"fallback": "streamline-kameleon-color:rainbow-duo",
	});
}

export default Component;
