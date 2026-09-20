import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tcx2gfblf.css';
import '../../css/f/f-gk_tbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tcx2gfblf"/><path clip-rule="evenodd" class="f-gk_tbiq"/></g>`,
		"fallback": "reicon:mask-circle-filled",
	});
}

export default Component;
