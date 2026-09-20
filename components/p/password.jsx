import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cb1tnnp-w.css';
import '../../css/p/ppfg7ujkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cb1tnnp-w"/><path clip-rule="evenodd" class="ppfg7ujkt"/></g>`,
		"fallback": "reicon:password",
	});
}

export default Component;
