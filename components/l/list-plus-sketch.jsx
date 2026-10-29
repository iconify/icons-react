import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o3den9b1v.css';
import '../../css/n/ntbzkabub.css';
import '../../css/x/xxcniyxuf.css';
import '../../css/j/j0bzfeots.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="o3den9b1v wm-k"/><path class="ntbzkabub wm-s"/><path class="wm-k xxcniyxuf"/><path class="j0bzfeots wm-s"/></g>`,
		"fallback": "withicons:list-plus-sketch",
	});
}

export default Component;
