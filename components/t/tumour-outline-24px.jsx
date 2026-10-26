import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rh1136bzs.css';
import '../../css/u/ud-z92y1b.css';
import '../../css/d/d0o4gmbsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rh1136bzs"/><path clip-rule="evenodd" class="ud-z92y1b"/><path class="d0o4gmbsx"/></g>`,
		"fallback": "healthicons:tumour-outline-24px",
	});
}

export default Component;
