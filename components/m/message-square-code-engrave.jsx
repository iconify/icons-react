import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z2pbu-99d.css';
import '../../css/q/qf5kqpo9g.css';
import '../../css/e/ee_t7pb7v.css';
import '../../css/p/pr09bmbgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k z2pbu-99d"/><path class="qf5kqpo9g wm-shadow"/><path class="ee_t7pb7v wm-k"/><path class="pr09bmbgq wm-a"/></g>`,
		"fallback": "withicons:message-square-code-engrave",
	});
}

export default Component;
