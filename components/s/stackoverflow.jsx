import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxow2pgrp.css';
import '../../css/t/ta0m-4b6a.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lxow2pgrp"/><path class="ta0m-4b6a"/></g>`,
		"fallback": "jam:stackoverflow",
	});
}

export default Component;
