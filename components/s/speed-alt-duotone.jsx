import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qo3oyobqh.css';
import '../../css/o/oiwkojw4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qo3oyobqh"/><path class="oiwkojw4x"/></g>`,
		"fallback": "lets-icons:speed-alt-duotone",
	});
}

export default Component;
