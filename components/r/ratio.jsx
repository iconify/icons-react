import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e1rvo-bmo.css';
import '../../css/n/n7c21daap.css';
import '../../css/z/zqmr0xbnf.css';
import '../../css/h/hlh_trbch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e1rvo-bmo"/><path class="n7c21daap"/><path class="zqmr0xbnf"/><path class="hlh_trbch"/></g>`,
		"fallback": "pixelarticons:ratio",
	});
}

export default Component;
