import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d0rfbr16h.css';
import '../../css/u/ub0c85bqe.css';
import '../../css/u/uwdjx6w4x.css';
import '../../css/k/k2eiih0kx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="d0rfbr16h"/><path class="ub0c85bqe"/><path class="uwdjx6w4x"/><path class="k2eiih0kx"/></g>`,
		"fallback": "iconaut:lungs",
	});
}

export default Component;
