import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/njuhqfbuz.css';
import '../../css/u/ubhlymbko.css';
import '../../css/t/tvyzlck_r.css';
import '../../css/j/j26whdbev.css';
import '../../css/a/acx55_b8y.css';
import '../../css/k/k3uzbcyno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="njuhqfbuz wm-shadow"/><path class="ubhlymbko"/><path class="tvyzlck_r"/><path class="j26whdbev"/><path class="acx55_b8y"/><path class="k3uzbcyno"/></g>`,
		"fallback": "withicons-retro:washing-machine",
	});
}

export default Component;
