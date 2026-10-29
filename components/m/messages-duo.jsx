import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j853l_ius.css';
import '../../css/v/vwhyjknhi.css';
import '../../css/m/m50p1qb4g.css';
import '../../css/x/x4mio0oxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="j853l_ius"/><path class="vwhyjknhi wm-a"/><path class="m50p1qb4g"/><path class="wm-a x4mio0oxp"/></g>`,
		"fallback": "withicons:messages-duo",
	});
}

export default Component;
