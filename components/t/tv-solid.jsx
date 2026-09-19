import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yjheq_bgu.css';
import '../../css/c/cmeuymbgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yjheq_bgu"/><path clip-rule="evenodd" class="cmeuymbgy"/></g>`,
		"fallback": "heroicons:tv-solid",
	});
}

export default Component;
