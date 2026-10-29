import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/ddt-lcbtr.css';
import '../../css/l/l51s4j92b.css';
import '../../css/x/xbx3o24fa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ddt-lcbtr"/><path class="l51s4j92b wm-a"/><path class="xbx3o24fa"/></g>`,
		"fallback": "withicons:pilcrow-duo",
	});
}

export default Component;
