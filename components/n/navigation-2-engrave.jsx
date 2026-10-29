import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q7pva0bia.css';
import '../../css/t/t826j2bwa.css';
import '../../css/a/a-n0l-b-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="q7pva0bia"/><path class="t826j2bwa wm-shadow"/><path class="a-n0l-b-j"/></g>`,
		"fallback": "withicons:navigation-2-engrave",
	});
}

export default Component;
