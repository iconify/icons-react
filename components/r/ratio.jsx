import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kuc9nn-0g.css';
import '../../css/v/vevm_vrfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kuc9nn-0g"/><path clip-rule="evenodd" class="vevm_vrfc"/></g>`,
		"fallback": "gg:ratio",
	});
}

export default Component;
