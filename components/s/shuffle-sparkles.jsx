import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d7nao396p.css';
import '../../css/t/tpn0zmmcy.css';
import '../../css/i/irbzclbwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="d7nao396p"/><path class="tpn0zmmcy"/><path class="irbzclbwc"/></g>`,
		"fallback": "iconaut:shuffle-sparkles",
	});
}

export default Component;
