import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms6brvbow.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zr9i61kva.css';
import '../../css/r/rqp586bnn.css';
import '../../css/b/blvo7kblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms6brvbow secondary"/><g class="dt0cm9dhy primary"><path class="zr9i61kva"/><path class="rqp586bnn"/><path class="blvo7kblh"/></g>`,
		"fallback": "iconaut:undo-dot-duo",
	});
}

export default Component;
