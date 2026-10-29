import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gbftiw4sm.css';
import '../../css/r/rmqzxtb-y.css';
import '../../css/o/o2vm0kbuj.css';
import '../../css/m/m3zf-tb2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gbftiw4sm"/><path class="rmqzxtb-y"/><path class="o2vm0kbuj wm-a"/><path class="m3zf-tb2g"/></g>`,
		"fallback": "withicons:projector",
	});
}

export default Component;
