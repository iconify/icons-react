import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qjofg2bwt.css';
import '../../css/z/zeaecdchr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qjofg2bwt"/><path class="zeaecdchr"/></g>`,
		"fallback": "griddy-icons:package-delivery-fast",
	});
}

export default Component;
