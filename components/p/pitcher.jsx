import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h_3iir57o.css';
import '../../css/r/r0pko5bpd.css';
import '../../css/q/qs9m2rbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="h_3iir57o"/><path class="r0pko5bpd"/><path class="qs9m2rbxi"/></g>`,
		"fallback": "iconaut:pitcher",
	});
}

export default Component;
