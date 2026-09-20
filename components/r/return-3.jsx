import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/g/gr_ppjnsm.css';
import '../../css/v/vd8wyfo5l.css';
import '../../css/y/yg9lh6u2m.css';
import '../../css/q/qf-mibb9m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="gr_ppjnsm"/><path class="vd8wyfo5l"/><path class="yg9lh6u2m"/><path class="qf-mibb9m"/></g>`,
		"fallback": "streamline-plump-color:return-3",
	});
}

export default Component;
