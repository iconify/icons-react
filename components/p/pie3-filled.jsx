import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o49z14bia.css';
import '../../css/t/tnhtcedzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o49z14bia"/><path clip-rule="evenodd" class="tnhtcedzd"/></g>`,
		"fallback": "reicon:pie3-filled",
	});
}

export default Component;
