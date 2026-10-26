import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/v/vb2n99b0s.css';
import '../../css/q/qp71kbb_v.css';
import '../../css/w/wzn0k41fm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="vb2n99b0s"/><path class="qp71kbb_v"/><path class="wzn0k41fm"/></g>`,
		"fallback": "doodle-icons:map",
	});
}

export default Component;
