import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nycvlbb_f.css';
import '../../css/k/kqzenpjvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nycvlbb_f"/><path clip-rule="evenodd" class="kqzenpjvg"/></g>`,
		"fallback": "reicon:underline-circle",
	});
}

export default Component;
