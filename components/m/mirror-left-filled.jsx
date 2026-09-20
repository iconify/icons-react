import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c1d7yrk_x.css';
import '../../css/d/d1-gn-qak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c1d7yrk_x"/><path class="d1-gn-qak"/></g>`,
		"fallback": "reicon:mirror-left-filled",
	});
}

export default Component;
