import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b75yygb-r.css';
import '../../css/i/iqu5xknni.css';
import '../../css/c/c5udlwswq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b75yygb-r"/><path class="iqu5xknni"/><path class="c5udlwswq"/></g>`,
		"fallback": "heroicons:square-3-stack-3d-solid",
	});
}

export default Component;
