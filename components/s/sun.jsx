import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5eak3k2p.css';
import '../../css/p/p13kdnbfo.css';
import '../../css/h/he36m_v7b.css';
import '../../css/x/x9xm9qexj.css';
import '../../css/e/egyveqizw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l5eak3k2p"><circle class="p13kdnbfo wm-shadow"/><circle class="he36m_v7b"/><path class="wm-a x9xm9qexj"/><path class="egyveqizw wm-a"/></g>`,
		"fallback": "withicons-brutal:sun",
	});
}

export default Component;
