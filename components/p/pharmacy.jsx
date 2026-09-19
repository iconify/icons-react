import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/iilu_nblt.css';
import '../../css/w/wxz1r3brh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="iilu_nblt"/><path class="wxz1r3brh"/></g>`,
		"fallback": "guidance:pharmacy",
	});
}

export default Component;
