import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l-l-zrb9o.css';
import '../../css/f/fqpodu9zv.css';
import '../../css/q/qjv_ievyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l-l-zrb9o"/><path class="fqpodu9zv wm-a"/><path class="qjv_ievyq"/></g>`,
		"fallback": "withicons:paint-roller-duo",
	});
}

export default Component;
