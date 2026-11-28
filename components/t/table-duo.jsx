import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2gg1trdk.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oqqr_m9av.css';
import '../../css/q/qk0454l5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary w2gg1trdk"/><g class="dt0cm9dhy primary"><path class="oqqr_m9av"/><path class="qk0454l5m"/></g>`,
		"fallback": "iconaut:table-duo",
	});
}

export default Component;
