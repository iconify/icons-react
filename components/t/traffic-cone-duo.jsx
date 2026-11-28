import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htc6s5nmc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pqmz6enqv.css';
import '../../css/u/uu3b6qbsc.css';
import '../../css/o/o4mz_86wa.css';
import '../../css/v/vv4lo6b2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htc6s5nmc secondary"/><g class="dt0cm9dhy primary"><path class="pqmz6enqv"/><path class="uu3b6qbsc"/><path class="o4mz_86wa"/><path class="vv4lo6b2m"/></g>`,
		"fallback": "iconaut:traffic-cone-duo",
	});
}

export default Component;
