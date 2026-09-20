import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xabgcobot.css';
import '../../css/r/r70kjmzup.css';
import '../../css/t/t_ev7s-sv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-path="url(#SVGGJ5CPOeH)" class="cuyn6tgcc"><path class="xabgcobot"/><path clip-rule="evenodd" class="r70kjmzup"/></g><defs><clipPath id="SVGGJ5CPOeH"><path class="t_ev7s-sv"/></clipPath></defs>`,
		"fallback": "qlementine-icons:new-24",
	});
}

export default Component;
