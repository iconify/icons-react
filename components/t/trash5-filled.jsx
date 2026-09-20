import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/deu_htz4g.css';
import '../../css/x/xbyfvjb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="deu_htz4g"/><path clip-rule="evenodd" class="xbyfvjb8v"/></g>`,
		"fallback": "reicon:trash5-filled",
	});
}

export default Component;
