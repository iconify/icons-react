import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m9ebv6big.css';
import '../../css/v/v7jzlzbxs.css';
import '../../css/u/u3s_svo7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m9ebv6big"/><path class="v7jzlzbxs wm-a"/><path class="u3s_svo7g"/></g>`,
		"fallback": "withicons:key-round",
	});
}

export default Component;
