import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j28mambxy.css';
import '../../css/f/fd5etqajb.css';
import '../../css/l/lg-8n1num.css';
import '../../css/i/itg9jgtim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="j28mambxy"/><path class="fd5etqajb wm-shadow"/><path class="lg-8n1num"/><path class="itg9jgtim wm-a"/></g>`,
		"fallback": "withicons:kanban-engrave",
	});
}

export default Component;
