import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/slsl3ubtj.css';
import '../../css/t/tct21sbjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="slsl3ubtj"/><path class="tct21sbjx"/></g>`,
		"fallback": "reicon:link-circle",
	});
}

export default Component;
