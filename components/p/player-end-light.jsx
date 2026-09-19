import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/brmvurbdu.css';
import '../../css/p/p69wevbnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="brmvurbdu"/><path class="p69wevbnc"/></g>`,
		"fallback": "iconamoon:player-end-light",
	});
}

export default Component;
