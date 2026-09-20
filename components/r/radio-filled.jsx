import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xk_y8f1zj.css';
import '../../css/k/kuvb--bqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xk_y8f1zj"/><path clip-rule="evenodd" class="kuvb--bqv"/></g>`,
		"fallback": "reicon:radio-filled",
	});
}

export default Component;
