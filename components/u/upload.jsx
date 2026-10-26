import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/z/zchbibkck.css';
import '../../css/h/hrk_2fbtt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="zchbibkck"/><path class="hrk_2fbtt"/></g>`,
		"fallback": "doodle-icons:upload",
	});
}

export default Component;
