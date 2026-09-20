import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/nklbjz30x.css';
import '../../css/o/ofo_e0b_q.css';
import '../../css/v/vg9lv4q5z.css';
import '../../css/q/qltwtq2js.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="nklbjz30x"/><path class="ofo_e0b_q"/><path class="vg9lv4q5z"/><path class="qltwtq2js"/></g>`,
		"fallback": "streamline-plump-color:rectangle-flag",
	});
}

export default Component;
