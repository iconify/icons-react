import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/i/iado6mbxh.css';
import '../../css/v/v7ujccbmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="iado6mbxh"/><path class="v7ujccbmb"/></g>`,
		"fallback": "codex:tag",
	});
}

export default Component;
