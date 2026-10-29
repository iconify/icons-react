import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m2lhnxb6o.css';
import '../../css/v/vjpnyegoq.css';
import '../../css/d/dk_c-sb7y.css';
import '../../css/h/hzbldnbux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m2lhnxb6o"/><path class="vjpnyegoq wm-s"/><path class="dk_c-sb7y"/><path class="hzbldnbux wm-a"/></g>`,
		"fallback": "withicons:poinsettia-duo",
	});
}

export default Component;
