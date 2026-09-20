import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/na50jqb_l.css';
import '../../css/j/jhlbcrb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="na50jqb_l"/><path class="jhlbcrb5z"/></g>`,
		"fallback": "reicon:mic-off",
	});
}

export default Component;
