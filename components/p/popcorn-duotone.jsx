import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b63trqbam.css';
import '../../css/t/tcqtb2bwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b63trqbam secondary"/><path class="primary tcqtb2bwc"/></g>`,
		"fallback": "iconaut:popcorn-duotone",
	});
}

export default Component;
