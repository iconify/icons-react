import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u67375bcw.css';
import '../../css/d/di5qp9b3x.css';
import '../../css/x/xhob3ybob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="u67375bcw"/><path class="di5qp9b3x"/><path class="xhob3ybob"/></g>`,
		"fallback": "streamline-ultimate:picture-double-landscape",
	});
}

export default Component;
