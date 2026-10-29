import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dk_c-sb7y.css';
import '../../css/h/hzbldnbux.css';
import '../../css/v/vjpnyegoq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="dk_c-sb7y"/><path class="hzbldnbux wm-a"/><path class="vjpnyegoq wm-s"/></g>`,
		"fallback": "withicons:poinsettia",
	});
}

export default Component;
