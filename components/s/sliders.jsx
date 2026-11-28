import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vt_vge82q.css';
import '../../css/h/h3x0v4biq.css';
import '../../css/l/l0aldw27v.css';
import '../../css/v/v1j-mbbje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vt_vge82q"/><circle class="h3x0v4biq"/><path class="l0aldw27v"/><circle class="v1j-mbbje"/></g>`,
		"fallback": "iconaut:sliders",
	});
}

export default Component;
