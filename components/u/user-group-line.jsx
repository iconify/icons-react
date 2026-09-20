import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ne00ukbgp.css';
import '../../css/o/o4zjqdqds.css';
import '../../css/z/z6nfzqklw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ne00ukbgp"/><path class="o4zjqdqds"/><path class="z6nfzqklw"/></g>`,
		"fallback": "majesticons:user-group-line",
	});
}

export default Component;
