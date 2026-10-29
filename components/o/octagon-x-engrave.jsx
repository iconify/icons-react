import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qlaoi1bsp.css';
import '../../css/p/p3ugz7wqs.css';
import '../../css/b/b82dfnb_o.css';
import '../../css/j/jmo57ab0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qlaoi1bsp wm-k"/><path class="p3ugz7wqs wm-shadow"/><path class="b82dfnb_o wm-k"/><path class="jmo57ab0a wm-a"/></g>`,
		"fallback": "withicons:octagon-x-engrave",
	});
}

export default Component;
