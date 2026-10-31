import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hmqnl6bbt.css';
import '../../css/l/lu1903boh.css';
import '../../css/n/nxrwimq_i.css';
import '../../css/k/k29p0cc0p.css';
import '../../css/t/tqlmfubzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hmqnl6bbt wm-shadow"/><path class="lu1903boh"/><path class="nxrwimq_i"/><path class="k29p0cc0p"/><path class="tqlmfubzm"/></g>`,
		"fallback": "withicons-retro:shapes",
	});
}

export default Component;
