import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uxw27rbus.css';
import '../../css/f/falfbbbsl.css';
import '../../css/l/lq3i3yb6h.css';
import '../../css/h/h8xc97bvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uxw27rbus wm-shadow"/><path class="falfbbbsl"/><path class="lq3i3yb6h"/><path class="h8xc97bvq"/></g>`,
		"fallback": "withicons-retro:lock-keyhole",
	});
}

export default Component;
