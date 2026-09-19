import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u8onylbtf.css';
import '../../css/p/pct1w8xka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u8onylbtf"/><path clip-rule="evenodd" class="pct1w8xka"/></g>`,
		"fallback": "healthicons:vih-1-outline-24px",
	});
}

export default Component;
